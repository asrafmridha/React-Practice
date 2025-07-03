const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

require('dotenv').config()
app.use(cors());
app.use(express.json());

const userName = process.env.USER_NAME;
const secretKey = process.env.SECRET_KEY;
console.log(userName, secretKey);

const uri = `mongodb+srv://${userName}:${secretKey}@cluster0.7oymi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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
        // Send a ping to confirm a successful connection
        const jobCollection = client.db("jobPortal").collection('jobs');
        const jobApplicationCollection = client.db("jobPortal").collection('job_application');
        app.get('/jobs', async (req, res) => {
            try {
                const jobs = await jobCollection.find().toArray();
                res.send(jobs);
            } catch (err) {
                console.error(err);
                res.status(500).send({ error: 'Failed to fetch users' });
            }
        });

        app.post('/jobs', async (req, res) => {
            const jobIApplyInfo = req.body;
            console.log('Job Application', jobIApplyInfo);
            const result = await jobApplicationCollection.insertOne(jobIApplyInfo);
            res.send(result);
            console.log(result);
        })

        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            try {
                const result = await jobCollection.findOne(query);
                res.send(result);
            } catch (err) {
                res.status(500).send({ error: 'Failed to Fetch user' });
            }
        });
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (err) {
        // Ensures that the client will close when you finish/error
        console.error(err);
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Job Portal')
})

app.listen(port, () => {
    console.log(`Job Is Waiting ${port}`)
})