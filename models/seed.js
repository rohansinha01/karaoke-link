// Dependencies

const mongoose = require("./connection")
const Song = require("./songs")

mongoose.connection.on("open", async () => {
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

    const data = await Song.create(startSongs)
    console.log("-----SONGS CREATED------")
    console.log(data)
    console.log("------SONGS CREATED--------")

    mongoose.connection.close()
    } catch (error) {
        console.log(error.message)
        res.send("There was an error, read logs for error details")
    }
})