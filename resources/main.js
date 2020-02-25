'use strict';
var input = document.getElementById('input');
var listPlaceHolder = document.getElementById('results');
input.setAttribute('placeholder', 'Insert a number...');
input.addEventListener('focus', (function (event) {
    event.preventDefault();
    input.setAttribute('placeholder', '');
    // input.value = '';
}));
input.addEventListener('blur', (function (event) {
    event.preventDefault();
    input.setAttribute('placeholder', 'Insert a number...');
    // input.value = '';
}));
input.addEventListener('keyup', (function (event) {
    event.preventDefault();
    // if (input.value === '') input.setAttribute('placeholder', 'Insert a number...');
    var inputValue = Number(input.value);
    var resultList = listOfCircularPrimes(inputValue);
    listPlaceHolder.innerHTML = '';
    if (resultList !== null && resultList.length >= 1) {
        resultList.forEach(function (circularPrimeNumber) {
            var circularPrimeNumberItem = document.createElement('DIV');
            circularPrimeNumberItem.classList.add('circularPrime');
            circularPrimeNumberItem.innerText = (circularPrimeNumber.toString());
            listPlaceHolder.appendChild(circularPrimeNumberItem);
        });
    }
    else {
        listPlaceHolder.innerHTML = getError(resultList);
    }
    ;
    // input.value = '';
}));
var getError = function (resultList) {
    if (resultList === null)
        return 'Wrong input, insert a number';
    else if (input.value === '')
        return 'Insert a number';
    else if (Number(input.value) < 2)
        return 'No results';
    return 'Unexpected error';
};
// PURE FUNCTIONS
// ---------------------------------------------------------------------------------------------------
var isANumber = function (userInput) {
    if (userInput === null)
        return false;
    return !isNaN(userInput);
};
var isCircularPrime = function (userInput) {
    var numberLength = userInput.toString().length;
    for (var x = 0; x < numberLength; x++) {
        if (!isPrime(userInput))
            return false;
        userInput = numberCircularVariation(userInput);
    }
    return true;
};
var numberCircularVariation = function (number) {
    var numberToString = number.toString();
    var stringLength = numberToString.length;
    var newNumberCircularVariation = parseInt(numberToString.substr(-1, 1) + numberToString.substr(0, stringLength - 1));
    return newNumberCircularVariation;
};
var isPrime = function (num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }
    return num > 1;
};
var listOfCircularPrimes = function (userInput) {
    var circularPrimesList = [];
    if (isANumber(userInput)) {
        for (var x = 2; x <= userInput; x++) {
            isCircularPrime(x) && circularPrimesList.push(x);
        }
        return circularPrimesList;
    }
    else
        return null;
};
