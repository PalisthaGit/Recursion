function checkFactorial(number) {
    
    // base case
    if(number === 1) {
        return number;
    }

    number = number * checkFactorial(number - 1);
    return number;
}

console.log(checkFactorial(4));