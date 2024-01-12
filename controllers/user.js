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
    res.send("login")
})

// Login Submit Route
router.post("/login", async (req, res) => {
    res.send("login")
})

// Logout Route
router.get("/logout", async (req, res) => {
    res.send("logout")
})

module.exports = router