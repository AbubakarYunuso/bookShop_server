const Book = require("../models/Book.model")

module.exports.booksController={
    addBook: async (req,res) =>{
        try {
            await Book.create({
                bookName:req.body.bookName,
                author:req.body.author,
                genre:req.body.genre
            })
            res.json('Книга добавлена ')
        } catch (error) {
            res.json('При добавлении книги,произошла ошибка')
        }
    },
    getBooks:async(req,res)=>{
        try {
            let bookAutGen = await Book.find({})
            .populate('author', '-_id nameAuthor')
            .populate('genre', '-_id genreName')
            res.json(bookAutGen)
        } catch (error) {
            res.json(error.message)
        }
    },
    getBook:async (req,res)=>{
        try {
            let book = await Book.findById(req.params.id)
            .populate('author', '-_id nameAuthor')
            .populate('genre', '-_id genreName') 
            res.json(book)
        } catch (error) {
            res.json(`Ошибка при выводе книги`)
        }
    },
    getBooksGenre:async (req,res)=>{
        try {
            let books = await Book.find({genre: req.params.id})
            .populate('author', '-_id nameAuthor')
            .populate('genre', '-_id genreName')
            res.json(books)
        } catch (error) {
            res.json(`При выводе книг на экран,произошла ошибка`)
        }
    },
    deleteBook:async (req,res)=>{
        try {
            await Book.findByIdAndDelete(req.params.id)
            res.json(`Книга удалена`)
        } catch (error) {
            res.json(`Ошибка при удалении книги`)
        }
    },
    updateBook:async(req,res)=>{
        try {
            await Book.findByIdAndUpdate(req.params.id,{
                bookName:req.body.bookName,
                author:req.body.author,
                genre:req.body.genre
            })
            res.json(`Книга изменена`)
        } catch (error) {
            res.json(`Ошибка при изменении книги`)
        }
    }
}