const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', routes);

router.post('/exemplo', (req, res) => {
    const {body} = req.body;
    res.json({message: `Recebido ${body}`});
    console.log(`Recebido ${body}`);
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port} !`)
});