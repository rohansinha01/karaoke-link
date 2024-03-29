//Dependencies

const mongoose = require("./connection")

// Model

const {Schema, model} = mongoose

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

// User Model

const User = model("User", userSchema)

module.exports = User