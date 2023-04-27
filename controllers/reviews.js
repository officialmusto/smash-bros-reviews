import { Character, Review } from "../models/character.js"


function index(req, res) {
  Character.findById(req.params.characterId)
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

function newReview(req, res) {
  Character.findById(req.params.characterId)
    .then(character => {
      res.render('reviews/new', {
        character,
        title: 'Write a Review.',
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

function create(req, res) {
  req.body.reviewer = req.user.profile._id
  req.body.favChar = !!req.body.favChar
  Character.create(req.body)
  console.log(req.body)
  .then(review => {
    res.render(`reviews/${req.params.character._id}`)
  })
}

export {
  index,
  create,
  newReview as new,
}