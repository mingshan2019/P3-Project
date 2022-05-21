const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://linkhub:linkhub@cluster0.gtura.mongodb.net/LinkHub?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('LinkHub');
    const users = database.collection('users');

	// users.insertOne({ id: 1, Name: 'Steve', IsMember: false });
	// users.insertOne({ id: 3, Name: 'Neo', IsMember: true });

    const query = { email: 'katherine.linw@gmail.com' };
    const user = await users.findOne(query);
    
    console.log(user);
  

  const express = require("express");

  const PORT = process.env.PORT || 3001;
  
  const app = express();
  
  app.get("/init", (req, res) => {
      res.json({ message: "server started!" });
    });
  
  app.get("/get", (req, res) => {
      res.send({message: 'A msg from backend'})
    });  
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  })
  
  app.get("/userinfo", (req, res) => {
    users.find().toArray((err, items) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ expenses: items })
    })
  })
  





} finally {
  // Ensures that the client will close when you finish/error
  await client.close();
}

}


run().catch(console.dir);


