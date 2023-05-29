const mongoose = require(`mongoose`)

const genreSchema = mongoose.Schema({
    genreName: String,
    aboutTheGenre: String
})

const Genre = mongoose.model(`Genre`,genreSchema)

module.exports = Genre