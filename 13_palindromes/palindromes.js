const palindromes = function (string) {
    parsedString=string.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

    let reversedString = parsedString
        .split('')
        .reverse()
        .join('');
    return reversedString === parsedString;
};

// Do not edit below this line
module.exports = palindromes;
