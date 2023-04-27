//GET localhost:3000/reviews/:characterId
import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import * as reviewsCtrl from  '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/reviews
router.get('/', reviewsCtrl.index)




//GET localhost:3000/reviews/:characterId/new
router.get('/:characterId/new', reviewsCtrl.new)

router.get('/:characterId/:reviewId/edit', isLoggedIn, reviewsCtrl.edit)


//POST REQUESTS 
// POST localhost:3000/reviews/characters/
router.post('/:characterId', isLoggedIn, reviewsCtrl.create)

//PUT 
router.put('/:characterId/:reviewId', isLoggedIn, reviewsCtrl.update)

//DELETE
router.delete('/:characterId/:reviewId', isLoggedIn, reviewsCtrl.delete)

export {
  router,
}