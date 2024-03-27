
const express = require("express"); // Importa o módulo express
const app = express(); // Cria uma instância do servidor express
const port = 3000; // Define a porta utilizada pelo servidor

/**
 * @description Define uma rota para a página inicial do site
 * @route GET /
 * @returns {String} Mensagem de boas vindas
 */
app.get("/", (req, res) => {
  res.send("Hello World!, http://localhost:3000/users/VALOR/books/VALOR"); // Envia uma mensagem para o navegador
  console.log("Hello World!, pagina inicial"); // Exibe uma mensagem no console
});

/**
 * @description Define uma rota para selecionar um usuário e um livro
 * @route GET /users/:userId/books/:bookId
 * @param {String} userId
 * @param {String} bookId
 * @returns {Object} Objeto com as informações dos parâmetros
 */
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params); // Envia as informações dos parâmetros para o navegador
  const { userId, bookId } = req.params; // Destructuring para extrair os valores dos parâmetros
  console.log(`userId: ${userId}, bookId: ${bookId}`); // Exibe as informações dos parâmetros no console
  console.log(`O usuário ${userId} e o livro ${bookId}, foram selecionados`);
});

/**
 * @description Inicia o servidor e exibe uma mensagem no console
 */
app.listen(port, () => {
  console.log(`Rodando app no endereço http://localhost:${port}`);
});

