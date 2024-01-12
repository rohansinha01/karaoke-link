//////////////////////////////////////
//Import Dependencies
///////////////////////////////////////
const express = require("express")
const Song = require("../models/songs")

//////////////////////////////////////
// Create the Router
///////////////////////////////////////
const router = express.Router()



// Routes

// Seed
router.get("/seed", async (req, res) => {
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
        ];
    await Song.deleteMany({})

    const songs = await Song.create(startSongs)
    res.json(songs)
    } catch (error) {
        console.log(error.message)
        res.send("There was an error, read logs for error details")
    }
})

// Index
router.get("/", async (req, res) => {
try {
    const songs = await Song.find({})
    res.render("./songs/index.ejs", {songs})
} catch (error) {
    console.log(error.message)
    res.send("There was an error, read logs for error details")
}

})

// New
router.get("/new", (req,res) => {
    res.render("songs/new.ejs")
})

// Create
router.post("/", async (req, res) => {
    try {
        req.body.sangBefore = req.body.sangBefore === "on" ? true : false;
        await Song.create(req.body)
        res.redirect("/songs")
    } catch (error) {
    console.log(error.message)
    res.send("There was an error, read logs for error details")
    }
})

// Edit
router.get("/:id/edit", async (req, res) => {
    try {
        const id = req.params.id
        const song = await Song.findById(id)
        res.render("songs/edit.ejs", { song })
    } catch (error) {
    console.log(error.message)
    res.send("There was an error, read logs for error details")
    }
})

// Update
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        req.body.sangBefore = req.body.sangBefore === "on" ? true : false
        await Song.findByIdAndUpdate(id, req.body)
        res.redirect(`/songs/${id}`)
    } catch (error) {
    console.log(error.message)
    res.send("There was an error, read logs for error details")
    }
})

// Delete
router.delete("/:id", async (req, res) => {
    try {
    const id = req.params.id
    await Song.findByIdAndDelete(id)
    res.redirect("/songs")
        
    } catch (error) {
        console.log(error.message)
        res.send("There was an error, read logs for error details")   
    }
    
})


// Show Page
router.get("/:id", async (req,res) => {
    try {
      const id = req.params.id
      const song = await Song.findById(id)  
      res.render("songs/show.ejs", {song})
    } catch (error) {
        console.log(error.message)
        res.send("There was an error, read logs for error details")
    }
})


module.exports = router