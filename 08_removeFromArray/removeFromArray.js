const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        while (arr.includes(arg)) {
            let index = arr.findIndex(element => element === arg);
            if (index !== -1) {
                arr.splice(index, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
