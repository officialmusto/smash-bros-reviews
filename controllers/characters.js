
if (!characters === undefined) {
Character.insertMany(characters)
}
import { Character } from '../models/character.js'
import { characters } from '../data/character-data.js'

characters.forEach(character => {
  console.log(character.name)
})

function index(req, res){
  Character.find({})
  .then(characters => {
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

function show(req, res) {
  Character.findById(req.params.characterId)
  .then(character => {
    console.log(characters)
    res.render('reviews/show', {
      character,
      title: "Characters"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  show,
}