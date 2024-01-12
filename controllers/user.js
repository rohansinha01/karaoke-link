// Dependencies

const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")

const router = express.Router()

// Routes

// Sign up Page Route
router.get("/signup", (req, res) => {
    res.render("user/signup.ejs")
})
// Sign up Submit Route
router.post("/signup", async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(
            req.body.password,
            await bcrypt.genSalt(10)
        )
        console.log("hashed password:", req.body.password)
        await User.create(req.body)
        res.redirect("/user/login")
    } catch (error) {
        console.log(error.message)
        res.send("There was an error, read logs for error details")
    }
})
// Login page Route
router.get("/login", (req,res) => {
    res.render("user/login.ejs")
})

// Login Submit Route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })
        if (!user) {
            throw new Error("User Error: User Doesn't Exist")
        }
        const result = await bcrypt.compare(password, user.password)
        if(!result){
            throw new Error("User Error: Password Doesn't Match")
        }
        req.session.username = username
        req.session.loggedIn = true
        res.redirect("/songs")
    } catch (error) {
        console.log(error.message)
        res.send("There was an error, read logs for error details")
    }
})

// Logout Route
router.get("/logout", async (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/user/login")
    })
})

module.exports = router