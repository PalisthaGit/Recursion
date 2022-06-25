const findSum = (number) => {

    // base case
    if(number === 1) {
        return number;
    }
   number = number + findSum(number-1);
    return number;

}

findSum(5);
console.log(findSum(5));
//5 + (5 - 1) + (5 - 1 - 1)
console.log(findSum(34));
console.log(findSum(4));