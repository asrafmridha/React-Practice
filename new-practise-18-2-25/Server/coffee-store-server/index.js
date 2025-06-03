const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const userName = process.env.USER_NAME;
const secretKey = process.env.SECRET_KEY;

const uri = `mongodb+srv://${userName}:${secretKey}@cluster0.7oymi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const database = client.db("coffeeDB")
    const coffeeCollection = database.collection("coffee");

    app.get('/coffee', async (req, res) => {
      try {
        const coffee = await coffeeCollection.find().toArray();
        res.send(coffee);
      } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to fetch users' });
      }
    });
    app.post('/addCoffee', async (req, res) => {
      const coffee = req.body;
      console.log('new Coffee', coffee);
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
      console.log(result);
    })
    app.delete('/coffee/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      try {
        const result = await coffeeCollection.deleteOne(query);
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
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})