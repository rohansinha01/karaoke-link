// Dependencies
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

// get .env variables
const {DATABASE_URL, SECRET, PORT} = process.env

// database connection
mongoose.connect(DATABASE_URL)

mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error))

// Create Songs Model
const {Schema, model} = mongoose
const songSchema = new Schema({
    song: String,
    artist: String,
    sang: Boolean
})

const Song = model("Song", songSchema)

// create app object
const app = express()

// Middle Ware

// routes
app.get("/", (req, res) => {
    res.send("It's Working")
})

// Index


// turn on the server (the listener)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})