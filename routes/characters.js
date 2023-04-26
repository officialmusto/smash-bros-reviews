import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import * as reviewsCtrl from  '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/reviews
router.get('/', charactersCtrl.index)


//GET localhost:3000/characters/reviews/new
router.get('/new', reviewsCtrl.new)


export {
  router,
}
