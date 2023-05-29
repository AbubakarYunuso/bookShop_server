const Review = require("../models/Review.model")

module.exports.reviewsController = {
    addReview:async (req,res)=>{
        try {
            await Review.create({
                reviewText: req.body.reviewText,
                reviewAuthorName: req.body.reviewAuthorName,
                bookReview:  req.body.bookReview
            })
            res.json(`Рецензия добавлена`)
        } catch (error) {
            res.json("При добавлении рецензии,произошла ошибка")
        }
    },
    deleteReview:async(req,res)=>{
        try {
            await Review.findByIdAndDelete(req.params.id)
            res.json(`Рецензия удалена`)
        } catch (error) {
            res.json(`При удалении произошла ошибка`)
        }
    },
    getReviews:async(req,res)=>{
        try {
            let reviews = await Review.find({bookReview: req.params.id})
            .populate('bookReview','-_id bookName ')
            res.json(reviews)
        } catch (error) {
            res.json(`Произошла Ошибка`)
        }
    }
}