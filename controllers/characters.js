import { Character } from '../models/character.js'

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
export {
  index,
}