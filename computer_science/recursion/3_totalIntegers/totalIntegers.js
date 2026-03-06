const totalIntegers = function(variable) {
  

    if (!Array.isArray(variable)) variable = Object.values(variable)

    // base
    if (Array.isArray(variable) && variable.length === 0) return 0;
    // 

    let count = 0;

    

    for (let i = variable.length; i > 0; i--) {
        if (typeof variable[i - 1] === 'object') {
            count += totalIntegers(variable[i - 1])
        } else {
            if (Number.isInteger(variable[i - 1])) 
                count += 1;
        }
    
    }

    return count;
    
};
  


// Do not edit below this line
module.exports = totalIntegers;

console.log(totalIntegers([1,2,[6,4],'6','h', [1, 3]]))
console.log(totalIntegers([]))
console.log(totalIntegers({}))
console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // returns 7
console.log(totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } })); // returns 4


/*

# Exercise 3 - totalIntegers

Write a function that takes in an arbitrarily deep array or object and returns the total number of integers stored inside this array or object.

```javascript
totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4
```


*/