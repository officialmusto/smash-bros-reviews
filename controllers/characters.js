import { Review } from "../models/review.js"
import { Character } from '../models/character.js'

function index(req, res){
  Character.find({})
  .then(character => {
    console.log(character)
    res.render('characters/index', {
      character,
      title: "Choose your Character."
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res){
  res.render('reviews/show', {
    title: 'Character Reviews.'
  })
}

export {
  index,
  show,
}