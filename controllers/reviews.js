import { Character } from "../models/character.js"

function index(req, res) {

  Character.findById(req.params.characterId)
  .populate("name")
  .then(character => {
    console.log(character.name)
    console.log(character)
    res.render('reviews/show', {
      character: character,
      title: 'titles',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  // const characterId = req.params.characterId.split("=")[1]
  Character.findById(characterId)
    .then(character => {
      res.render('reviews/show', {
        character,
        title: character
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function newReview (req, res){
  res.render('reviews/new', {
    title: 'Write a Review.'
  })
}

function create(req, res) {
  console.log(req.body)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Review.create(req.body)
  .then(review => {
    res.redirect('/characters/reviews')})
  .catch(err => {
    console.log(err)
    res.redirect('/reviews/new')
  })
}



export {
  index,
  create,
  show,
  newReview as new,
}