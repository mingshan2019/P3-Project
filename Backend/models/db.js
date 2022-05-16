const mongoose = require('mongoose');

const uri = 'mongodb+srv://linkhub:linkhub@cluster0.gtura.mongodb.net/LinkHub?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },    // To solve version collision
  function (err) {
    if (!err) {
      console.log('Connected to mongo.');
    } else {
      console.log('Failed to connect to mongo!', err);
    }
  });

require('./user.js');