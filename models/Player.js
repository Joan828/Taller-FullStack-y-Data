const { Decimal128, Long } = require('bson');
const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  player_id: Number,
  short_name: String,
  wage_eur: Decimal128
}, { timestamps: true });

PlayerSchema.index({
    name: "text",
  });
  
const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;