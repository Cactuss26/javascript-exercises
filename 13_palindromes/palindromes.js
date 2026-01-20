const NUMBER_OF_ALPHABETS = 26;
const NUMBER_OF_DIGITS = 10;

const palindromes = function (str) {
    str = str.toLowerCase();

    let l = Number(str.length);
    let str2 = "";
    let allowedChars = []
    for (let i = 0; i < NUMBER_OF_ALPHABETS; i++) {
        allowedChars.push(String.fromCharCode('A'.charCodeAt(0) + i));
        allowedChars.push(String.fromCharCode('a'.charCodeAt(0) + i));
    }

    for (let i = 0; i < NUMBER_OF_DIGITS; i++) {
        allowedChars.push(String(i));
    }

    for (let i = l - 1; i >= 0; i--) {
        if (!(allowedChars.includes(str[i]))) {
            continue;
        }

        str2 += str[i];
    }

    let i = 0;
    let j = 0;
    while (i < l) {
        if (!(allowedChars.includes(str[i]))) {
            ++i;
            continue;
        }

        if (str[i] != str2[j]) {
            return false;
        }

        ++i;
        ++j;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
