const Player = require("../models/Player")

const PlayerController = {
    async getPlayerById(req, res) {
        try {
            const player = await Player.findById(req.params._id)
            res.send(player)
        } catch (error) {
            console.error(error);
        }
    },
    async getPlayerByName(req, res) {
        try {
          if(req.params.short_name.length>20){
            return res.status(400).send('Búsqueda demasiado larga')
          }
          const short_name = new RegExp(req.params.short_name, "i");
          const player = await Player.find({short_name});
          res.send(player);
        } catch (error) {
          console.log(error);
        }
      },
      async getAllInfo(req, res) {
        try {
          const { page = 1, limit = 10 } = req.query;
          const players = await Player.find()
            .limit(limit)
            .skip((page - 1) * limit);
          res.send(players);
        } catch (error) {
          console.error(error);
        }
      },
      async getTenHighestPaid(req, res) {
        try {
          const players = await Player.find()
          .sort({salary:-1}) 
          .limit(10)
          res.send(players);
        } catch (error) {
          console.error(error);
        }
      }
}

module.exports = PlayerController