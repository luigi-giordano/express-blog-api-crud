const posts = require('../data/posts')

const index = ((req,res) => {
  const tag = req.query.tag
  let tagPosts = tag ? posts.filter(post => post.tags.includes(tag)) : posts
    return res.json(tagPosts)
  })

const show = (req, res) => {
  const singoloPost = posts.find(singoloPost => singoloPost.id == req.params.id)

  if (!singoloPost) {
    res.status(404)
    return res.json({
      message: "Post non trovato",
      status: 404,
      error: "Not Found"
    })
  }
  res.json(singoloPost)
}

const store = (req, res) => {
  res.send("Aggiungo un nuovo cibo")
}

const update = (req, res) => {
  res.send("Modifico un cibo in base all'id" + req.params.id)
}

const modify = (req, res) => {
  res.send("Modifico parzialmente un cibo in base all'id" + req.params.id)
}

const destroy = (req, res) => {
  const singoloPost = posts.find(singoloPost => singoloPost.id == req.params.id)
  
  if (!singoloPost) {
     res.status(404)
     return res.json({
       message: "Post non trovato",
       status: 404,
       error: "Not Found"
     })
   }
  posts.splice(posts.indexOf(singoloPost), 1)
  console.log(posts);
  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}