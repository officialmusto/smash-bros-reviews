import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'

const router = Router()

//localhost:3000/reviews
router.get('/', reviewsCtrl.index)

export {
  router
}
