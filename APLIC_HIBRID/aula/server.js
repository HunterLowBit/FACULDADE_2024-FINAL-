const express = require("express");
const connectDB = require('./database');
const routes = require("./routes");

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});