const express = require('express')
const app = express()
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const users=[
  { "id": 1, "name": "Alice Johnson", "email": "alice.johnson@example.com" },
  { "id": 2, "name": "Bob Smith", "email": "bob.smith@example.com" },
  { "id": 3, "name": "Charlie Davis", "email": "charlie.davis@example.com" },
  { "id": 4, "name": "Dana Lee", "email": "dana.lee@example.com" },
  { "id": 5, "name": "Ethan Brown", "email": "ethan.brown@example.com" },
  { "id": 6, "name": "Fiona Clark", "email": "fiona.clark@example.com" },
  { "id": 7, "name": "George Allen", "email": "george.allen@example.com" },
  { "id": 8, "name": "Hannah Scott", "email": "hannah.scott@example.com" },
  { "id": 9, "name": "Ian Miller", "email": "ian.miller@example.com" },
  { "id": 10, "name": "Jasmine Turner", "email": "jasmine.turner@example.com" }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  res.send(users)
})

app.post('/users', (req, res) => {
  console.log("post api hititng")
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`User Management Server app listening on port ${port}`)
})