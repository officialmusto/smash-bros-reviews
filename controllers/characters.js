import { Character } from "../models/character.js"

function index(req, res) {
  Character.find({})
    .then((character) => {
      res.render("characters/index", {
        character,
        title: "Choose your Character.",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function show(req, res) {
  const characterId = req.params.characterId
  Character.findById(characterId)
    .then((character) => {
      res.render("reviews/show", {
        character,
        title: character.name,
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function showReview(req, res) {
  Character.findById(req.params.characterId)
    .then((character) => {
      console.log(character.name)
      console.log(character)
      res.render("reviews/show", {
        character: character,
        title: "titles",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function newReview(req, res) {
  Character.findById(req.params.characterId)
    .then((character) => {
      res.render("reviews/new", {
        character,
        title: "Write a Review.",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function createReview(req, res) {
  req.body.reviewer = req.user.profile._id
  req.body.favChar = !!req.body.favChar
  console.log(req.body)
  Character.findById(req.params.characterId)
    .then((character) => {
      character.reviews.push(req.body)
      character.save()
      res.render(`reviews/show`, {
        character,
        title: character.name,
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function editReview(req, res) {
  Character.findById(req.params.characterId)
    .then((character) => {
      console.log(character.reviews)
      let review = character.reviews.id(req.params.reviewId)
      console.log(review)
      res.render("reviews/edit", {
        character,
        review,
        title: "Edit your Review.",
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function updateReview(req, res) {
  req.body.favChar = !!req.body.favChar
  Character.findById(req.params.characterId)
    .then((character) => {
      character.reviews = character.reviews.map((r) =>
        r.equals(req.params.reviewId) ? { ...r, ...req.body } : r
      )
      character.save()
      res.redirect(`/characters/${req.params.characterId}`)
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}
function deleteReview(req, res) {
  Character.findById(req.params.characterId)
    .then((character) => {
      character.reviews.id(req.params.reviewId).deleteOne()
      character.save()
      res.redirect(`/characters/${req.params.characterId}`)
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
}

export {
  index,
  show,
  showReview,
  createReview,
  updateReview,
  newReview,
  editReview,
  deleteReview,
}
