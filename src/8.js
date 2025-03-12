const express = require('express');
const app = express();
app.get('/', function(req, res) {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let sum = number1 + number2;
    res.send(`The sum of ${number1} and ${number2} is ${sum}.`);
});
app.listen(3000, function() {
    console.log('Server started on port 3000');
});
