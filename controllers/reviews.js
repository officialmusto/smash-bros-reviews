
function index(req, res) {
  res.render('reviews/show', {
    title: 'All Reviews'
    })
}

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
  index,
  create,
  newReview as new,
}