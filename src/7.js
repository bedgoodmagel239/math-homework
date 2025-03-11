// Import the necessary modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Set up the Express app
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route to handle requests for math problems
app.get('/math', (req, res) => {
  // Generate a random math problem
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  const problem = `${num1} ${operator} ${num2}`;
  
  // Return the math problem to the user
  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Math Homework</title>
      </head>
      <body>
        <h1>${problem}</h1>
        <form action="/math" method="POST">
          <label for="answer">Answer:</label>
          <input type="text" id="answer" name="answer"><br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>`);
});

// Set up a route to handle POST requests from the form
app.post('/math', (req, res) => {
  // Get the user's answer from the request body
  const answer = req.body.answer;
  
  // Check if the answer is correct
  if (num1 + num2 === parseInt(answer)) {
    // If the answer is correct, redirect the user to the next math problem
    res.redirect('/math');
  } else {
    // If the answer is incorrect, display an error message and allow the user to try again
    res.send(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Math Homework</title>
        </head>
        <body>
          <h1>Incorrect answer! Try again.</h1>
          <form action="/math" method="POST">
            <label for="answer">Answer:</label>
            <input type="text" id="answer" name="answer"><br><br>
            <input type="submit" value="Submit">
          </form>
        </body>
      </html>`);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
