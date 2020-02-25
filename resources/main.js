'use strict';
exports.__esModule = true;
var isANumber = function (userInput) {
    if (userInput === null)
        return false;
    return !isNaN(userInput);
};
exports.isANumber = isANumber;
var isCircularPrime = function (userInput) {
    var numberLength = userInput.toString().length;
    for (var x = 0; x < numberLength; x++) {
        if (!isPrime(userInput))
            return false;
        userInput = numberCircularVariation(userInput);
    }
    return true;
};
exports.isCircularPrime = isCircularPrime;
var numberCircularVariation = function (number) {
    var numberToString = number.toString();
    var stringLength = numberToString.length;
    var newNumberCircularVariation = parseInt(numberToString.substr(-1, 1) + numberToString.substr(0, stringLength - 1));
    return newNumberCircularVariation;
};
exports.numberCircularVariation = numberCircularVariation;
var isPrime = function (num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
exports.isPrime = isPrime;
var listOfCircularPrimes = function (userInput) {
    var circularPrimesList = [];
    if (isANumber(userInput)) {
        for (var x = 2; x <= userInput; x++) {
            isCircularPrime(x) && circularPrimesList.push(x);
        }
        return circularPrimesList;
    }
};
exports.listOfCircularPrimes = listOfCircularPrimes;
