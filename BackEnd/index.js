const express = require("express")
const cors = require('cors');
const mongo = require("mongodb").MongoClient
const ObjectId = require('mongodb').ObjectId;

const app = express()
app.use(cors());
app.use(express.json())


app.listen(5000, () => console.log("Server ready"))
const url = "mongodb+srv://linkhub:linkhub@cluster0.gtura.mongodb.net/LinkHub?retryWrites=true&w=majority";

let db, users, portfolio

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
    }
)

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
                console.log(JSON.stringify(result).password)
                console.log("verified " + req.body.email)
            }
            else if (!result) {
                res.status(200).json({ token: "nof" })
                console.log("nof")
            }
            else {
                res.status(200).json({ token: "no" })
                console.log("no")
                console.log(JSON.stringify(result).password)
                
            }

        }
    )
})