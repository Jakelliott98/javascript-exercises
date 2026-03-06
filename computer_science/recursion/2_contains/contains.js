const contains = function(object, value) {
  
    if (Object.keys(object).length === 0) return false;
    else {
        const objectKeys = Object.keys(object);
        for (let i = objectKeys.length; i > 0; i --) {
            const currentKey = object[objectKeys[i - 1]]
            if (currentKey === value) return true;
            if (typeof currentKey === 'object') 
                if (contains(currentKey, value)) return true;
        }
        return false;
    }

};
  
// Do not edit below this line
module.exports = contains;

console.log(contains({}, 'boo'))
console.log(contains({ foo: "bar", lee: 'bar', wee:'red' }, "bar"))
console.log(contains({ foo: "lee", lee: 'bar', wee:'red' }, "bar"))
console.log(contains({ foo: { bar: "bar" } }, "bar"))

/*
Write a function that searches for a value in a nested object. It returns true if the object contains that value.

Objects are compared by reference.

Examples:

```javascript
contains({ foo: "foo" }, "bar") // false
contains({ foo: { bar: "bar" } }, "bar") // true
```
*/