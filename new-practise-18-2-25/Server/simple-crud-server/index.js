const express = require('express')
const cors = require("cors");
const app = express()
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.port || 3000;
app.use(cors());
app.use(express());
app.use(express.json());
// asraf_35
// 8wa3kuBculcm06jd
// Replace the placeholder with your Atlas connection string

const uri = "mongodb+srv://asraf_35:8wa3kuBculcm06jd@cluster0.7oymi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Simple Curd Is Running')
})

app.listen(port, () => {
    console.log(`Simple Curd Is Running ${port}`)
})
