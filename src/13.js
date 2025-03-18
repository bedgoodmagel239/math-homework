
const express = require('express');
const app = express();

app.get('/', function(req, res){
  const mathProblems = [
    {
      question: 'What is the value of x in the equation 2x + 5 = 11?',
      answer: 'x = 3'
    },
    {
      question: 'What is the value of y in the equation y - 3 = 2?',
      answer: 'y = 5'
    }
  ];

  const problemIndex = Math.floor(Math.random() * mathProblems.length);
  const currentProblem = mathProblems[problemIndex];

  res.send(`${currentProblem.question}<br><br>Answer: ${currentProblem.answer}`);
});

app.listen(3000, function(){
  console.log('Server started on port 3000');
});