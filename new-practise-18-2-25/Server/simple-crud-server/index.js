const express = require('express')
const cors = require("cors");
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.port || 5000;
app.use(cors());
app.use(express());
app.use(express.json());
// asraf_35
// 8wa3kuBculcm06jd
// Replace the placeholder with your Atlas connection string

const uri = "mongodb+srv://asraf_35:8wa3kuBculcm06jd@cluster0.7oymi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    const database = client.db("usersDB")
    const userCollection = database.collection("users");
    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('new User', user);
      const result = await userCollection.insertOne(user);
      res.send(result);
      console.log(result);
    })
    app.get('/users', async (req, res) => {
      try {
        const users = await userCollection.find().toArray();
        res.send(users);
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to fetch users' });
      }
    });
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      try {
        const result = await userCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: 'Failed to delete user' });
      }

    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    // Ensures that the client will close when you finish/error
    console.error(err);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Simple Curd Is Running')
})




app.listen(port, () => {
  console.log(`Simple Curd Is Running ${port}`)
})
