const express = require('express');
const app = express();
const port = 5002;

const users =require('./users.json')

app.get('/', (req, res) => {
    res.send('Hello World From Node!')
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    const id=parseInt(req.params.id);
    const user =users.find(u =>u.id===id) || {};
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})