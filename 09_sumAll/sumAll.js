const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || (String(num1).includes(".")) || (String(num2).includes(".")) ||
         typeof num1 !== "number" || typeof num2 !== "number"
    ) {
        return "ERROR";
    }

    if (num1 >= num2) {
        return (num1 * (num1 + 1) / 2) - ((num2 - 1) * num2 / 2); 
    }

    else {
        return (num2 * (num2 + 1) / 2) - ((num1 - 1) * num1 / 2);
    }
};

// Do not edit below this line
module.exports = sumAll;
