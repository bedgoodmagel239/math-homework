const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const sum = num1 + num2;

  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
