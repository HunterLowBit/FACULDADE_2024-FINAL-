const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3000;

app.use(express.json()); // para leitura de dados via POST

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Rodando na porta ${port} !`)
});