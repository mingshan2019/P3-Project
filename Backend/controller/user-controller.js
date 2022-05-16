const mongoose = require('mongoose');
const User = mongoose.model('users');
const assert = require('assert');

const findAllUsers = function (req, res, next) {
  return new Promise(function (resolve, reject) {
    let users = User.find()
      .lean()
      .then(function (doc) {
        return doc;
      });

    if (users == undefined) reject('Failed to load users');
    else {
      resolve(users);
    }
  });

};

const findSortedUsers = function (req, res, next) {
  return new Promise((resolve, reject) => {
    // Find sorted by voteCount
    let users = User.find().sort({ voteCount: -1 })
      .lean()
      .then(function (doc) {
        return doc;
      });

    if (users == undefined) reject('Failed to load users');
    else {
      resolve(users);
    }
  });
};

const getSearch = (req, res, next) => {
  var keyword = 'none';
  if (req.params.keyword) keyword = req.params.keyword;

  // Search for keyword in name or bio
  return new Promise((resolve, reject) => {
    let user = User.find({
      $or: [{ name: { $regex: keyword, $options: '$i' } },
        { bio: { $regex: keyword, $options: '$i' } },
      ],
    }).sort({ voteCount: -1 })
      .lean()
      .then(function (doc) {
        return doc;
      });

    if (user == undefined) reject('User undefined');
    else {
      resolve(user);
    }
  });
};

const getUserByID = (req, res) => {
  var id = req.params.id;

  // Find user by id
  return new Promise((resolve, reject) => {
    let user = User.findById(id)
      .lean()
      .then(function (doc) {
        return doc;
      });

    if (user == undefined) reject('User undefined');
    else {
      resolve(user);
    }
  });
};

const getLoggedIn = (req, res) => {
  var id = req.session.userId;

  // Get info of user logged in
  return new Promise((resolve, reject) => {
    let user = User.findById(id)
      .lean()
      .then(function (doc) {
        return doc;
      });

    if (user == undefined) reject('User undefined');
    else {
      resolve(user);
    }
  });
};


const voteForUser = async function (req, res, next) {
  var voteToId = req.body.id;
  var voteFromId = req.session.userId;

  let candidateToReturn = await User.findById(voteFromId).then(async(voteFrom) => {
    // Check for possible cycle
    let checkCycle = await checkCycleRecursive(voteToId, voteFromId).then(result => result);

    if (checkCycle) {
      console.error('CYCLEEEEE');
      return;
    }

    // If the user has not yet voted, give their vote to the selected candidate
    else if (voteFrom.vote_to == '') {
      // If the user has not yet voted, give their vote to the selected candidate
      let candidateToReturn2 = await User.findById(voteToId).then(async (voteTo) => {
        // Update vote from
        voteFrom.vote_to = voteToId;
        voteFrom.voteCount = 0;
        voteFrom.save();

        // Update vote to
        voteTo.votesAllocated += voteFrom.votesAllocated;
        voteTo.votes_from.push(voteFrom._id);

        // If candidate is 'final', no need for recursion, and update vote count
        if (voteTo.vote_to == '') {
          voteTo.voteCount += voteFrom.votesAllocated;
          voteTo.save();
        }

        // Start recursion to update next candidates on the chain
        else {
          voteTo.save();
          await voteRecursive(voteTo, voteFrom.votesAllocated);
        }

        return voteTo.name;
      });
      return candidateToReturn2;
    };
  });
  return candidateToReturn;
};

// Pass a vote rescursively
const voteRecursive = async function (voteTo, votesToAllocate) {
  await User.findById(voteTo.vote_to, async function (err, newVoteTo) {
    if (err)
      console.error('error, no user found');

    // Always add new allocated votes to the next candidate in the chain.
    newVoteTo.votesAllocated += votesToAllocate;

    // If final candidate in the chain, update their vote count
    if (newVoteTo.vote_to == '') {
      newVoteTo.voteCount += votesToAllocate;
      newVoteTo.save();
      return;
    }

    // Keep recursion
    else {
      newVoteTo.save();
      await voteRecursive(newVoteTo, votesToAllocate);
    }
  });
};

const unvoteForUser = async function (req, res, next) {
  var voteFromId = req.session.userId;
  let candidateToReturn = await User.findById(voteFromId).then(async (voteFrom) => {
    let candidateToReturn2 = await User.findById(voteFrom.vote_to).then(async (votedFor) => {
      // If candidate is 'final', no need for recursion, and update vote count
      if (votedFor.vote_to == '') {
        votedFor.voteCount -= voteFrom.votesAllocated;
      }

      // Update
      votedFor.votesAllocated -= voteFrom.votesAllocated;
      votedFor.votes_from = votedFor.votes_from.filter(fromId => fromId != voteFromId);
      votedFor.save();

      // Enter recursion
      await removeVoteRecursive(votedFor, voteFrom.votesAllocated);

      return votedFor.name;
    });
    voteFrom.voteCount = voteFrom.votesAllocated;
    voteFrom.vote_to = '';
    voteFrom.save();
    return candidateToReturn2;
  });
  return candidateToReturn;
};

const removeVoteRecursive = async function (votedFor, votesToRemove) {
  if (votedFor.vote_to != '') {
    await User.findById(votedFor.vote_to, async function (err, newVotedFor) {
      if (err) console.error('error, no user found');

      else {
        newVotedFor.votesAllocated -= votesToRemove;
        if (newVotedFor.vote_to == '') {
          newVotedFor.voteCount -= votesToRemove;
        }

        newVotedFor.save();

        return await removeVoteRecursive(newVotedFor, votesToRemove);
      }
    });
  }

  return;
};

const makeUserCandidate = async function (req, res, next) {
  var id = req.session.userId;
  await User.findById(id, function (err, doc) {
    if (err) {
      console.error('error, no user found');
    }

    doc.candidate = true;
    doc.save();
  });

  res.redirect('/users/' + req.session.userId);
};

const removeUserCandidate = async function (req, res, next) {
  var id = req.session.userId;

  await User.findById(id, async function (err, voter) {
    if (err) {
      console.error('error, no user found');
    }

    // remove votes from allocated votes in chain recursively
    if (voter.vote_to != '') {
      await User.findById(voter.vote_to, async function (err, newVotedFor) {
        if (err) {
          console.error('error, no user found');
        }

        // If candidate is 'final', no need for recursion, and update vote count
        if (newVotedFor.vote_to == '') {
          newVotedFor.voteCount -= voter.votesAllocated;
          newVotedFor.votesAllocated -= voter.votesAllocated;
          newVotedFor.votes_from = newVotedFor.votes_from.filter(id_ => id_ != voter._id);
          newVotedFor.save();
        }

        // Start recursion, updating the next candidate beforehand
        else {
          newVotedFor.votesAllocated -= voter.votesAllocated;
          newVotedFor.votes_from = newVotedFor.votes_from.filter(id_ => id_ != voter._id);
          newVotedFor.save();

          await removeVoteRecursive(newVotedFor, voter.votesAllocated);
        }
      });
    }

    // remove previous voters' votes
    if (await voter.votes_from.length != 0) {
      await voter.votes_from.forEach(async function (voteFromId) {
        await User.findById(voteFromId, function (err, voteFrom) {
          if (err) {
            console.error('error, no user found');
          } else {
            // update vote from
            voteFrom.voteCount = voteFrom.votesAllocated;
            voteFrom.vote_to = '';
            voteFrom.save();
          }
        });
      });

      // Update voter
      voter.voteCount = 1;
      voter.votesAllocated = 1;
      voter.vote_to = '';
      voter.candidate = false;
      voter.votes_from = [];
      voter.save();
    }

    // Has no previous votes, so just update.
    else {
      voter.vote_to = '';
      voter.candidate = false;
      voter.votes_from = [];
      voter.save();
    }
  });

  await res.redirect('/users/' + req.session.userId);
};

const changeName = function (req, res, next) {
  var id = req.session.userId;
  var newName = req.body.name;
  User.findById(id, function (err, doc) {
    if (err) {
      console.error('error, no user found');
    }

    doc.name = newName;
    doc.save();
  });

  res.redirect('/users/' + req.session.userId);
};


const myPortfolio = function (req, res, next) {
  const myId = req.session.userId;

  return new Promise((resolve, reject) => {
    let portfolio = User.findById(myId)
      .lean()
      .then(function (doc) {
        return doc.myPortfolio;
      });

    resolve(portfolio);
  });
};



module.exports.changeName = changeName;
module.exports.removeUserCandidate = removeUserCandidate;
module.exports.makeUserCandidate = makeUserCandidate;
module.exports.findAllUsers = findAllUsers;
module.exports.findSortedUsers = findSortedUsers;
module.exports.voteForUser = voteForUser;
module.exports.unvoteForUser = unvoteForUser;
module.exports.getUserByID = getUserByID;
module.exports.getLoggedIn = getLoggedIn;
module.exports.getSearch = getSearch;
module.exports.myPortfolio = myPortfolio;