const reverseString = function(input) {
    let reversed = "";
    for (let i=input.length;i>0;i--){
        reversed += input.charAt(i-1);
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
