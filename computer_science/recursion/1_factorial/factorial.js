const factorial = function(n) {

    if (!Number.isInteger(n) || n < 0)  
        return undefined
    else if (n === 0 || n === 1)
        return 1;
    else
        return n * factorial(n - 1)

};

// Do not edit below this line
module.exports = factorial;