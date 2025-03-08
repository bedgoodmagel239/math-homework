const math = require('math');

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(math.randomInt(1, 10));
}
console.log(numbers);
