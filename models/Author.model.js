const mongoose = require(`mongoose`)

const authorSchema = mongoose.Schema({
    nameAuthor: String,
    aboutTheAuthor: String
})

const Author = mongoose.model(`Author`,authorSchema)

module.exports = Author