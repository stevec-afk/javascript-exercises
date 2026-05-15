// Same as before, I'm using iteration rather than recursion to solve

const totalIntegers = (obj) => {
    if (typeof obj !== 'object' || obj === null) return undefined;

    const stack = [obj];
    let count = 0;

    while (stack.length > 0) {
        const current = stack.pop();
    
        if (Number.isInteger(current)) {
            count++;
            continue;
        }       
        if (typeof current === "object" && current !== null){
            for (const value of Object.values(current)) {
                stack.push(value);
            }
        }
    }
    return count;
};
  
// Do not edit below this line
module.exports = totalIntegers;
