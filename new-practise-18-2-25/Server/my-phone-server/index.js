const express = require('express');
const phones = require('./phones.json');

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('My Information coming Soon');
})

app.get('/phones', (req, res) => {
  res.send(phones);
})

app.get('/phones/:id', (req, res) => {
    const id=parseInt(req.params.id);
    console.log("I need Id For Data",id);
    const phone =phones.find(ph=>ph.id===id) || {};
    res.send(phone);
//   res.send("I nedd Id For",);
})



app.listen(port, () => {
  console.log(`My Phone Server running on port ${port}`)
})