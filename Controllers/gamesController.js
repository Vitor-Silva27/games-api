const express = require('express');
const router = express.Router();


router.get("/games",(_, res) =>{
    res.statusCode = 200;
});

/* router.get("/game/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.sendStatus(400);
    }else{
        const game = DB.games.find(game => game.id === id);
        if(game == undefined){
            res.sendStatus(404);
        }else{
            res.statusCode = 200;
            res.json(game);
        }
    }
}); 

router.post("/game", (req, res) =>{
    const {title, price, year} = req.body;

    DB.games.push({
        id: 23,
        title,
        price,
        year
    });

    res.sendStatus(200);
});

router.delete("/game/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.sendStatus(400);
    }else{
        const index = DB.games.findIndex(game => game.id === id);
        
        if(index == -1){
            res.sendStatus(400);
        }else{
            DB.games.splice(index, 1);
            res.sendStatus(200);
        }
    }
}); */

module.exports = router;