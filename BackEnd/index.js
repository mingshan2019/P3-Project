const express = require("express")
const cors = require('cors');
const mongo = require("mongodb").MongoClient
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');


const app = express()
app.use(cors());
app.use(express.json())


app.listen(5000, () => console.log("Server ready"))
const url = "mongodb+srv://linkhub:linkhub@cluster0.gtura.mongodb.net/LinkHub?retryWrites=true&w=majority";

let db, users, portfolio,comment

mongo.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            console.error(err)
            return
        }
        db = client.db("LinkHub")
        users = db.collection("users");
        portfolio = db.collection("portfolio");
        comment = db.collection("comment");
    }
)

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://linkhub:linkhub@cluster0.gtura.mongodb.net/LinkHub?retryWrites=true&w=majority');
}

const portfolioSchema = new mongoose.Schema({
    _id: ObjectId,
    email:String,
    portfolio: String,
    datetime: String,
    color: String,
    img: String,
    lists: [String]

  });

  const Mportfolio = mongoose.model('portfolio', portfolioSchema);




//API lists

app.post("/SignUp", (req, res) => {

    users.insertOne(
        {
            email: req.body.email,
            password: req.body.password
        },
        (err, result) => {
            if (err) {
                console.error("err: "+err)
                res.status(500).json({ err: err })
                return
            }
            res.status(200).json({ email: req.body.email })
        }
    )
})

app.post('/login', function (req, res) {

    users.findOne(
        {
            email: req.body.email,
        },
        (err, result) => {
            if (err) {
                console.error("err: "+err)
                res.status(500).json({ err: err })
                return
            }
            else if (req.body != null && result && req.body.password == result.password) {
                res.status(200).json({ token: req.body.email })
                console.log("verified " + req.body.email + "password "+ JSON.stringify(result).password)
            }
            else if (!result) {
                res.status(200).json({ token: "not found" })
                console.log("not found")
            }
            else {
                res.status(200).json({ token: "incorrect" })            //Can this realy happen?
                console.log("failed")   
            }

        }
    )
})

app.post("/AddComment", (req, res) => {
    
    comment.insertOne(
        {
            author: req.body.name,
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: req.body.value,
            datetime: req.body.now
        },
        (err, result) => {
            if (err) {
                console.error("err: "+err)
                res.status(500).json({ err: err })
                return
            }
            res.status(200).json({ status:'ok' })
        }
    )
})

app.get("/GetComment", (req, res) => {
    comment.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ comment: items })
    })
  })

  var dateTime = require('node-datetime');

  app.post("/AddPortfolio", (req, res) => {
    
    const idd = new(ObjectId)
    Mportfolio.create(
        {
            _id: idd,
            email:req.body.Email,
            portfolio: req.body.portfolioName,
            color:'grey',
            img:'https://jrlinkhub.s3.ap-southeast-2.amazonaws.com/1.png',
            lists:["a","b"],
            datetime: dateTime.create().format('Y-m-d')
        },
        (err, result) => {
            if (err) {
                console.error("err: "+err)
                res.status(500).json({ err: err })
                return
            }
            res.status(200).json({ id:result._id })
        }
    )
})

app.post("/GetPortfolio", (req, res) => {
    Mportfolio.find(
        {
            email:req.body.Email
        }
    ,(err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ portfolio: items })
    }
  )
})


  app.post("/PublishPortfolio", (req, res) => {

    console.log("publish "+req.body.id + "name " + req.body.name);

    Mportfolio.findByIdAndUpdate
    (
        
            req.body.id,
        
        {$set:{
            portfolio:req.body.name,
            email:req.body.email,
            color:req.body.color,
            img:req.body.img,
            lists:req.body.lists
        }
        },{upsert: true},
        (err, result) => {
            if (err) {
                console.error("err: "+err)
                res.status(500).json({ err: err })
                return
            }
            res.status(200).json({ id: req.body._id })

        }
    )
})

app.post('/GetShare', function (req, res) {


    Mportfolio.findById(
        {
            _id: req.body.id,
        },
        (err, result) => {
            if (err) {
                console.error("err: "+err)
                res.status(500).json({ err: err })
                return
            }
            
                // res.status(200).json({ color: result.color, img:result.img,lists:result.lists })

                res.status(200).json(result);
        }
    )
})
