const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Math Homework!</h1>');
});

app.listen(3000);
