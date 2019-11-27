const rutasMain = require("./route/main.js");
const rutasHeroes = require("./route/heroes.js");
const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Server running in ${port}`));

app.use("/", rutasMain);
app.use("/heroes", rutasHeroes);