import { Character} from "../models/character.js"


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
  Character.findById(req.params.characterId)
  .then(character => {
    character.reviews.push(req.body)
    character.save()
    res.render(`reviews/show`, {
      character,
      title: character.name
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
    let review = character.reviews.id(req.params.reviewId)
    console.log(review)
    res.render('reviews/edit', {
      character,
      review,
      title: "Edit your Review."
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}
function update(req, res){
  req.body.favChar = !!req.body.favChar
  Character.findById(req.params.characterId)
  .then(character => {
    character.reviews = character.reviews.map(r => (
      r.equals(req.params.reviewId) ? {...r, ...req.body} : r
    ))
    character.save()
    res.redirect(`/characters/${req.params.characterId}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}
function deleteReview(req, res){
  Character.findById(req.params.characterId)
  .then(character => {
    character.reviews.id(req.params.reviewId).deleteOne()
    character.save()
    res.redirect(`/characters/${req.params.characterId}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}
export {
  index,
  create,
  update,
  newReview as new,
  editReview as edit,
  deleteReview as delete,
}