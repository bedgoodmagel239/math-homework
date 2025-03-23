function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    const sqrtN = Math.sqrt(n);
    for (let i = 2; i <= sqrtN; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function generatePrimeNumbers(count) {
    let primes = [];
    for (let i = 2; primes.length < count; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
