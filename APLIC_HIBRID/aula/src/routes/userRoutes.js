const express = require("express");
const router = express.Router();

router.get("/exemplo", (req, res) => {
    res.json({ message: 'Rota Get Funcionando' })
});

router.post('/exemplo', (req, res) => {
    const { body } = req.body;
    res.json({
        message: `Rota Post Funcionando com o
    corpo: ${body}`
    });
    console.log(body);
});

module.exports = router;