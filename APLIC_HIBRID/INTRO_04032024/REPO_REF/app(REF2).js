/**
 * Exemplo de como criar uma aplicação web usando Express
 *
 * @author  HunterLowBit
 * @version 1.0.0
 * @since   2024-03-11
 */
const express = require("express");
const app = express();
const port = 3000;

/**
 * Endpoint '/' que retorna
 * a mensagem 'Hello World! GET'
 */
app.get("/", (req, res) => {
  res.send("Hello World! GET");
});

/**
 * Endpoint '/random.text' que retorna
 * a mensagem 'random.text'
 */
app.get("/random.text", (req, res) => {
  res.send("random.text");
});

/**
 * Endpoint '/users/:userId/books/:bookId' que retorna
 * os parâmetros enviados no URL
 */
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

/**
 * Endpoint '/aula' que retorna um objeto JSON
 * com a mensagem 'aula' e a versão '1.0.0'
 */
app.get("/aula", (req, res) => {
  res.json({
    aula: "nodejs",
    versão: "1.0.0",
  });
});

/**
 * Endpoint '/aula2' que retorna o
 * arquivo atual (app.js) com o nome
 * 'aula2.js'
 */
app.get("/aula2", (req, res) => {
  res.download(__filename, "aula2.js");
});

/**
 * Inicializa a aplicação na porta 3000
 */
app.listen(port, () => {
  console.log(`Execução no ${port} !`);
});
