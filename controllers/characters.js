import { Character, Review } from '../models/character.js'

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
  const characterId = req.params.characterId
  Character.findById(characterId)
    .then(character => {
      res.render('reviews/show', {
        character,
        title: character.name
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