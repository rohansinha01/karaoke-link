// Dependencies

const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const Song = require("./models/songs")
const songController = require("./controllers/song")
const userController = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

const {DATABASE_URL, SECRET, PORT} = process.env

// create app object
const app = express()

// Middle Ware
app.use(morgan('dev'))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false
}))

app.use("/songs", songController)
app.use("/user", userController)
// routes
app.get("/", (req, res) => {
    res.send("It's Working")
})



// turn on the server (the listener)
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})