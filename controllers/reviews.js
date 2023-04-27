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
  console.log(req.body)
  Character.findById(req.params.characterId)
  .then(character => {
    character.reviews.push(req.body)
    character.save()
    res.render(`reviews/show`, {
      character,
      title: "Character Review"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function editReview(req, res) {
  Character.findById(req.params.characterId)
  .then(character => {
    console.log(character.reviews)
    let review = character.reviews.find( r => r._id.equals(req.params.reviewId))
    console.log(review)
    res.render('reviews/edit', {
      character,
      review,
      title: "EDIT"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res){
  console.log(req.params)
  Character.findById(req.params.characterId)
  .then(character => {

  })
}

export {
  index,
  create,
  newReview as new,
  editReview,
  update
}