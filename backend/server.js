import express from 'express';

const app = express();
const PORT = 5000;


app.get('/', (req, res) => {
  res.send("Hello there!  GET request called successfully!")
})






app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
})
