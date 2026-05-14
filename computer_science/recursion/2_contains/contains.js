// My solution uses iteration rather than recursion. 
// Using recursion, if the object is sufficiently large enough 
// it will result in a stack overflow. This can happen easily if the object 
// is, lets say, a comment chain of 15,000 comments. 
// This approach avoids that by creating 
// a temporary stack in memory (which is removed from the stack) 
// and then looping through it until a match is found.

const contains = function(obj, target) {
    const stack = [obj];
    
    while (stack.length > 0) {
        const current = stack.pop();

        // Edge case: NaN is a value within the object
        // normally NaN === NaN evaluates to false, 
        // because NaN is not equal to anything, including itself.
        if (Number.isNaN(target) && Number.isNaN(current)) return true;

        // match found for current value - breaks the loop
        if (current === target) return true;

        // if current value is an object, add it to the stack
        if (current && typeof current === "object") {
            stack.push(...Object.values(current));
        }
    }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
