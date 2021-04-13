const express = require("express");
const router = express.Router();
const Game = require("../Models/Game");

router.get("/games", (_, res) => {
  Game.findAll().then((game) => {
    res.json(game);
  });
  res.statusCode = 200;
});

router.get("/game/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    Game.findOne({
      where: {
        id: id,
      },
    })
      .then((game) => {
        res.json(game);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

router.post("/game", (req, res) => {
  const { title, price, year } = req.body;
  Game.create({
    title: title,
    price: price,
    year: year,
  });
  res.sendStatus(200);
});

router.delete("/game/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    Game.destroy({
      where: {
        id: id,
      },
    }).then(() =>{
        res.sendStatus(200);
    })
  }
});

module.exports = router;
