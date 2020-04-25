const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('HELLO WORLD!!');
});

app.get('/login', (req, res) => {
    res.send('Login plz');
});

app.listen(port, () => {
    console.log(`Connected ${port}!`);
});