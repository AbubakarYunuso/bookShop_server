const Genre = require("../models/Genre.model")

module.exports.genresController = {
    addGenre: async(req,res)=>{
        try {
            await Genre.create({
                genreName: req.body.genreName,
                aboutTheGenre: req.body.aboutTheGenre
            })
            res.json('Жанр был добавлен')
        } catch (error) {
            res.json('Произошла ошибка при добавлении жанра')
        }
    },
    getGenres: async (req,res)=>{
        try {
            let genres = await Genre.find({})
            res.json(genres)
        } catch (error) {
            res.json('При выводе жанров на экран произошла ошибка')
        }
    },
    deleteGenre: async (req,res)=>{
        try {
            await Genre.findByIdAndDelete(req.params.id)
            res.json('Жанр был удалён')
        } catch (error) {
            res.json('При удалении жанра произошла ошибка')
        }
    }
}