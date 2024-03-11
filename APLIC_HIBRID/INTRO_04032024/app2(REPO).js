const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! GET')
});

app.get('/random.text', (req, res) => {
    res.send('random.text')
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  });
// * /users/:userId/books/:bookId
// * /users/34/books/8989
// * { "userId": "34", "bookId": "8989" }

app.get('/aula', (req, res) => {
    res.json({
        "aula": "nodejs",
        "versão": "1.0.0"
    })
});

app.listen(port, () => {
    console.log(`Execução no ${port} !`)
});