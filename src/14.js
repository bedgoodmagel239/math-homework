const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const generateCode = () => {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        numbers.push(getRandomNumber());
    }
    return numbers.join('');
};
