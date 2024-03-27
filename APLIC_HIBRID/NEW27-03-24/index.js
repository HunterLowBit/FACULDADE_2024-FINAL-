const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!, http://localhost:3000/users/VALOR/books/VALOR");
    console.log("Hello World!, pagina inicial");
});

app.get("/users/:userId/books/:bookId", (req, res) => {
    res.send(req.params);
    const { userId, bookId } = req.params;
    console.log(`userId: ${userId}, bookId: ${bookId}`);
    console.log(`O usuário ${userId} e o livro ${bookId}, foram selecionados`);
});

app.listen(port, () => {
  console.log(`Rodando app no endereço http://localhost:${port}`);
});
