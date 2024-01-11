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
    songTitle: String,
    artist: String,
    sang: Boolean
})

const Song = model("Song", songSchema)

// create app object
const app = express()

// Middle Ware
app.use(morgan('dev'))
app.use(methodOverride("-method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
// routes
app.get("/", (req, res) => {
    res.send("It's Working")
})

// Seed
app.get("/songs/seed", async (req, res) => {
    try {
        const startSongs = [
            {
                songTitle: 'Mr. Brightside',
                artist: 'The Killers',
                sangBefore: true
            },
            {
                songTitle: '1000 Miles',
                artist: 'Vanessa Carlton',
                sangBefore: true
            },
            {
                songTitle: 'Dont Stop Believin',
                artist: 'Journey',
                sangBefore: false
            }
        ]
    await Song.deleteMany({})

    const songs = await Song.create(startSongs)
    res.json(songs)
    } catch (error) {
        console.log(error.message)
        res.send("There was an error, read logs for error details")
    }
})

// turn on the server (the listener)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})