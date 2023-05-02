import { Router } from "express"
import * as charactersCtrl from "../controllers/characters.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()
///CHARACTER GETS
//GET localhost:3000/characters
router.get("/", charactersCtrl.index)

//GET localhost:3000/characters/:characterId
router.get("/:characterId", charactersCtrl.show)



///REVIEWS GETS
// GET localhost:3000/characters/:characterId/reviews
router.get("/:characterId/reviews", charactersCtrl.showReview)

//GET localhost:3000/characters/:characterId/reviews/new
router.get("/:characterId/reviews/new", charactersCtrl.newReview)

//GET localhost:3000/characters/:characterId/reviews/:reviewId/edit
router.get("/:characterId/reviews/:reviewId/edit", isLoggedIn, charactersCtrl.editReview)


///REVIEWS POST
// POST localhost:3000/reviews/characters/:characterId
router.post("/:characterId/reviews", isLoggedIn, charactersCtrl.createReview)


///REVIEWS PUT
// PUT localhost:3000/characters/:characterId/reviews/:reviewId
router.put("/:characterId/reviews/:reviewId", isLoggedIn, charactersCtrl.updateReview)


///REVIEWS DELETE
///DELETE localhost:3000/characters/:characterId/reviews/:reviewId
router.delete("/:characterId/reviews/:reviewId", isLoggedIn, charactersCtrl.deleteReview)

export { router }
