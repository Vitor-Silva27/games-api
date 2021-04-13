const Sequelize = require("sequelize");
const connection = require("../Database/database");

const Game = connection.define("games", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
});

module.exports = Game;
