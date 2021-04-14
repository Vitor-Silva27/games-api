const express = require("express");
const app = express();
const connection = require("./Database/database");
const gamesController = require("./Game/gamesController");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection
  .authenticate()
  .then(() => {
    console.log("Database connection was a success!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", gamesController);

module.exports = app;