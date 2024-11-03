function avg(numbers) {
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}
function prime(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factorial(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) return -1;
    if (num > 15) return "out of range";
    if (num === 0 || num === 1) return 1;
    
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    avg,
    prime,
    factorial
}