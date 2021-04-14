const Sequelize = require('sequelize');

const connection = new Sequelize('gameStore','root','joao5104303',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;