const express = require("express");
const routes = require("./routes");
const conectDB = require("./database");

const app = express();
const port = 3000;

conectDB();
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
