
import { Character } from '../models/character.js'

function index(req, res){
  Character.find({})
  .then(characters => {
    console.log(characters)
    res.render('characters/index', {
      characters,
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