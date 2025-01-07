const express = require('express');
const router = express.Router();
const posts = require('../posts');

//index
router.get('/', (req,res) =>{
  res.json (posts)
})

//show
router.get('/:title', (req,res) =>{
  const titolo = posts.find(post => {
    return post.title === req.params.title
  })
  res.json (titolo)
})

//store
router.post('/', (req,res) =>{
  res.send('Creazione nuovo cibo')
})

//update
router.put('/:id', (req,res)=>{
  res.send(`Modifico l'elemento cibo con id ${req.params.id} `)
})

//modify
router.patch('/:id', (req, res)=>{
  res.send(`Modifico parzialmente l'elemento cibo con id ${req.params.id}`)
})

//destroy
router.delete('/:id', (req,res)=>{
  res.send(`Elimino l'elemento cibo con id ${req.params.id}`)
})

module.exports = router