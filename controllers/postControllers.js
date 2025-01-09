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
  console.log(req.body);
   const id = posts.at(-1).id + 1;

   const newId = posts[posts.length -1].id + 1;

   const newPost = {
     id: newId,
     title: req.body.title,
     content: req.body.content,
     author: req.body.author
   }

   posts.push(newPost);

   res.status(201);
  
  res.json(posts);
}

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'Not Found'
    })
  }

  for (let key in req.body){
    post[key] = req.body[key]
  }
  res.json(posts)
}

const modify = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id);

  if (!post) {
    res.status(404);
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'Not Found'
    })
  }

  for (let key in req.body){
    post[key] = req.body[key]
  }
  res.json(posts)
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