import { Router } from 'express'
import * as charactersCtrl from '../controllers/characters.js'

const router = Router()

//localhost:3000/reviews
router.get('/', charactersCtrl.index)

//localhost:3000/rev
router.get('/reviews', charactersCtrl.show)


export {
  router,
}
