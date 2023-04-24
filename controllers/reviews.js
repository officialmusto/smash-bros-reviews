import { Review } from "../models/review.js"
import { Character } from '../models/character.js'

function index(req, res){
  Character.find({})
  .then(character => {
    console.log(character)
    res.render('reviews/index', {
      character,
      title: "Choose your Character."
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export {
  index,
}