const fibonacci = function(x) {
    if (x < 0) return "OOPS";
    
    let fib = [0,1];
    for (let i=2;i<=x;i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib[x];
};

// Do not edit below this line
module.exports = fibonacci;
