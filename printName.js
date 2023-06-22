function printName(str) {
    console.log(str);
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function addExclamationPoint(str) {
    if (str && str.length > 0) {
        return str + '!';
    } else {
        return str;
    }
}

// This exports an object with the two functions inside of it
module.exports = {
    printName: printName,
    capitalize: capitalize,
    exclaim: addExclamationPoint,
    data: {
        nested: {
            another: {
                cap: capitalize
            }
        }
    }
};