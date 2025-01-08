const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');

const port = 3001;

app.use(express.json());
app.use('/posts', postsRouter);


app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});