const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');
const checkTime = require('./middleware/checkTime.js');
const errorsHandler = require('./middleware/errorsHandler.js');
const notFound = require('./middleware/notFound.js');

const port = 3001;

app.use(express.json());

// app.get('/', checkTime, (req, res) => {
//   res.send('Server dei post')
// })
app.use(checkTime);

app.use('/posts', postsRouter);

app.use(errorsHandler);

app.use(notFound);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});