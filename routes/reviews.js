//GET localhost:3000/reviews/:characterId
import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import * as reviewsCtrl from  '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/reviews
router.get('/', reviewsCtrl.index)


//GET localhost:3000/reviews/:characterId
router.get('/reviews/:characterId', charactersCtrl.show)

//POST REQUESTS 
// POST localhost:3000/characters/review
router.post('/', isLoggedIn, reviewsCtrl.create)

export {
  router,
}