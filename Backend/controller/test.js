const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://linkhub:linkhub@cluster0.gtura.mongodb.net/LinkHub?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('LinkHub');
    const users = database.collection('user');

	users.insertOne({ id: 1, Name: 'Steve', IsMember: false });
	users.insertOne({ id: 3, Name: 'Neo', IsMember: true });

    const query = { id: 3 };
    const user = await users.findOne(query);

    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

