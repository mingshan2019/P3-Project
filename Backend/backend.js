// https://flaviocopes.com/rest-api-express-mongodb/
const express = require("express")
const cors = require('cors');
const mongo = require("mongodb").MongoClient

const app = express()
app.use(cors());


app.listen(3001, () => console.log("Server ready"))
const url = "mongodb+srv://linkhub:linkhub@cluster0.gtura.mongodb.net/LinkHub?retryWrites=true&w=majority";

let db, users

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
  }
)

app.use(express.json())

app.get("/allusers", (req, res) => {
    users.find().toArray((err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ users: result })
    })
  })


  app.get("/testuser", (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');

    users.findOne(
    {
      email: 'katherine.linw@gmail.com',
    },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ user: result })
    }
    )
    })

  app.post("/adduser", (req, res) => {
    users.insertOne(
    {
      email: req.body.email,
      password:req.body.password
    },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ ok: true })
    }
    )
    })

    app.post("/oneuser", (req, res) => {
        users.findOne(
        {
          email: req.body.email,
        },
        (err, result) => {
          if (err) {
            console.error(err)
            res.status(500).json({ err: err })
            return
          }
          res.status(200).json({ user: result })
        }
        )
        })
    
        // app.post('/login', (req, res) => {
        //     // users.findOne(
        //     //     {
        //     //       email: req.body.username,
        //     //     },
        //         // (err, result) => {
        //         //   if (err) {
        //         //     console.error(err)
        //         //     res.status(500).json({ err: err })
        //         //     return
        //         //   }
        //           const user = req.body;
        //           console.log(req.body);
        //           res.status(200).json({ user: user.username })
        //         }
        //         )
        //         //  })

                app.post('/logintest', function(req, res){
   
                    console.log(req.body);
                    
                   
                    res.json( {token: req.body.email});
                  });

                  app.post('/login', function(req, res){
                    console.log(req.body.email)
                    console.log(req.body.password)

                    users.findOne(
                    {
                      email: req.body.email,
                    },
                    (err, result) => {
                      if (err) {
                        console.error(err)
                        res.status(500).json({ err: err })
                        return
                      }
                      else if(req.body!=null && result && req.body.password == result.password){
                      res.status(200).json({ token: "verified" })
                      console.log(JSON.stringify(result).password)  
                      console.log("verified")  
                    }
                      else{
                      res.status(200).json({ token: "no" })
                        console.log("no")  
                        console.log(JSON.stringify(result).password)  


                      }
                      
                    }
                    )
                    })