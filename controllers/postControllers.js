const post = require('../routers/posts')

const index = (req, res) => {
  res.send('Elenco dei cibi')
}

const show = (req, res) => {
  res.send("Visualizzo un cibo in base all'id" + req.params.id)
}

const store = (req, res) => {
  res.send("Aggiungo un nuovo cibo")
}

const update = (req, res) {
  res.send("Modifico un cibo in base all'id" + req.params.id)
}

const modify = (req, res) {
  res.send("Modifico parzialmente un cibo in base all'id" + req.params.id)
}

const destroy = (req, res) {
  res.send("Elimino un cibo in base all'id" + req.params.id)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}