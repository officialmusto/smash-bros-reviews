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
function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Review.create(req.body)
  .then(review => {
    res.redirect(`/characters/review/${review._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies/new')
  })
}

export {
  index,
  show,
  create,
}