const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! GET')
});

app.get('/random.text', (req, res) => {
    res.send('random.text')
});

app.listen(port, () => {
    console.log(`Execução no ${port} !`)
});