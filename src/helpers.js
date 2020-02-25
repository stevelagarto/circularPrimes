"use strict";
exports.__esModule = true;
exports.isANumber = function (userInput) {
    if (userInput === null)
        return false;
    return !isNaN(userInput);
};
exports.isCircularPrime = function (userInput) {
    var numberLength = userInput.toString().length;
    for (var x = 0; x < numberLength; x++) {
        if (!exports.isPrime(userInput))
            return false;
        userInput = exports.numberCircularVariation(userInput);
    }
    return true;
};
exports.numberCircularVariation = function (number) {
    var numberToString = number.toString();
    var stringLength = numberToString.length;
    var newNumberCircularVariation = parseInt(numberToString.substr(-1, 1) + numberToString.substr(0, stringLength - 1));
    return newNumberCircularVariation;
};
exports.isPrime = function (num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
exports.listOfCircularPrimes = function (userInput) {
    var circularPrimesList = [];
    if (exports.isANumber(userInput)) {
        for (var x = 2; x <= userInput; x++) {
            exports.isCircularPrime(x) && circularPrimesList.push(x);
        }
        return circularPrimesList;
    }
    else
        return null;
};
