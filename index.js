const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//i'll use a fake db for a while, but as soon as possible i'm gonna change for a real database
const DB = {
  games: [
    {
      id: 2,
      title: "call of duty",
      year: 2019,
      price: 40,
    },
    {
      id: 21,
      title: "Assassin's creed valhalla",
      year: 2020,
      price: 60,
    },
    {
      id: 34,
      title: "Sea of thieves",
      year: 2018,
      price: 30,
    },
  ],
};

app.get("/games",(_, res) =>{
    res.statusCode = 200;
    res.json(DB.games);
});

app.get("/games/:id", (req, res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        const id = parseInt(req.params.id);
        const game = DB.games.find(game => game.id === id);
        if(game == undefined){
            res.sendStatus(404);
        }else{
            res.statusCode = 200;
            res.json(game);
        }
    }
})

app.listen(4000, () => {
  console.log("App is working");
});
