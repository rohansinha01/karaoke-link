
const mongoose = require("./connection")

const { Schema, model } = mongoose;

const songSchema = new Schema({
  songTitle: String,
  artist: String,
  sangBefore: Boolean,
});


const Song = model("Song", songSchema);

module.exports = Song