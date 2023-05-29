const Author = require("../models/Author.model")

module.exports.authorsController = {
    addAuthor:async (req,res)=>{
        try {
            await Author.create({
                nameAuthor: req.body.nameAuthor,
                aboutTheAuthor: req.body.aboutTheAuthor
            })
            res.json('Автор был добавлен')
        } catch (error) {
            res.json('При добавлении автора, произошла ошибка')
        }
    },
    getAuthors: async(req,res)=>{
        try {
            let authors = await Author.find({})
            res.json(authors)
        } catch (error) {
            res.json('При выводе авторов на экран, произошла ошибка')
        }
    },
    deleteAuthor:async(req,res)=>{
        try {
            await Author.findByIdAndDelete(req.params.id)
            res.json('Автор был удалён')
        } catch (error) {
            res.json('При удалении автора, произошла ошибка')
        }
    }
}