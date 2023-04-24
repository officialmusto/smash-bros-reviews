import { Character } from "../models/character.js"

function newReview (req, res){
  res.render('reviews/new', {
    title: 'Write a Review.'
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
    res.redirect('/reviews/new')
  })
}



export {
  create,
  newReview as new,
}