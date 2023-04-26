
// if (!characters === undefined) {
// Character.insertMany(characters)
// }
import { Character } from '../models/character.js'
import { characters } from '../data/character-data.js'

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
  const characterId = req.query.characterId
  Character.findById(characterId)
    .then(character => {
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