const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const numbers = getRandomNumbers(10);
  res.send(`Your random numbers are: ${numbers}`);
});

function getRandomNumbers(n) {
  let nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(Math.floor(Math.random() * 10));
  }
  return nums;
}

app.listen(3000, () => console.log('Server started on port 3000'));
