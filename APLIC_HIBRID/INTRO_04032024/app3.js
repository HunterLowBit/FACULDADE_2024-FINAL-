const express = require('express');

const port = 3000;

app.use(express.json()); // para leitura de dados via POST

app.listen(port, () => {
    console.log(`Rodando na porta ${port} !`)
});