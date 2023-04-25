
import { Character } from '../models/character.js'
import { characters } from '../data/character-data.js'
Character.insertMany(characters)

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