const express = require("express");
const app = express();
const connection = require("./Database/database");
const gamesController = require("./Controllers/gamesController");

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
    
app.listen(4000, () => {
  console.log("App is working");
});
