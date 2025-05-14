const express = require('express')
const app = express()
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users=[
  { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com" },
  { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com" },
  { "id": 3, "name": "Charlie Davis", "email": "charlie.davis@example.com" },
  { "id": 4, "name": "Dana Lee", "email": "dana.lee@example.com" }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  console.log("post api hititng")
  const newUser=req.body;
  newUser.id=users.length+1;
  users.push(newUser);
  res.send(newUser);
})

app.listen(port, () => {
  console.log(`User Management Server app listening on port ${port}`)
})