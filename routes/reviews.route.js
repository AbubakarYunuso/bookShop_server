const {Router} = require(`express`)
const {reviewsController} = require(`../controllers/reviews.controller.js`)

const router = Router()

router.post(`/reviews`,reviewsController.addReview)
router.delete(`/reviews/:id`,reviewsController.deleteReview)
router.get(`/reviews/books/:id`,reviewsController.getReviews)

module.exports = router