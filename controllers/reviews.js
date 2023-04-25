import { Character } from "../models/character.js"

function newReview (req, res){
  res.render('reviews/new', {
    title: 'Write a Review.'
  })
}

function create(req, res) {
  console.log('hI')
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
  create,
  newReview as new,
}