import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'
import * as reviewsCtrl from  '../controllers/reviews.js'

const router = Router()

//GET localhost:3000/reviews
router.get('/', charactersCtrl.index)

//GET localhost:3000/characters/reviews
router.get('/reviews', charactersCtrl.show)

//GET localhost:3000/characters/reviews/new
router.get('/reviews/new', reviewsCtrl.new)

//POST REQUESTS 
// POST localhost:3000/characters
router.post('/', reviewsCtrl.create)


export {
  router,
}
