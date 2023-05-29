const {Router} = require(`express`)
const {authorsController} = require(`../controllers/authors.controller.js`)

const router = Router()

router.post(`/authors`,authorsController.addAuthor)
router.get(`/authors`,authorsController.getAuthors)
router.delete(`/authors/:id`,authorsController.deleteAuthor)

module.exports = router