'use strict';
exports.__esModule = true;
var helpers_1 = require("./helpers");
require('./style.css');
require('./normalize.css');
var input = document.getElementById('input');
var listPlaceHolder = document.getElementById('results');
var messages = document.getElementById('messages');
input.setAttribute('placeholder', 'Type here...');
input.addEventListener('focus', (function (event) {
    event.preventDefault();
    input.setAttribute('placeholder', '');
}));
input.addEventListener('blur', (function (event) {
    event.preventDefault();
    input.setAttribute('placeholder', 'Type here...');
}));
input.addEventListener('keyup', (function (event) {
    event.preventDefault();
    var inputValue = Number(input.value);
    var resultList = helpers_1.listOfCircularPrimes(inputValue);
    listPlaceHolder.innerHTML = '';
    messages.innerHTML = '';
    if (resultList && resultList.length >= 1) {
        resultList.forEach(function (circularPrimeNumber) {
            var circularPrimeNumberItem = document.createElement('DIV');
            circularPrimeNumberItem.classList.add('circularPrime');
            circularPrimeNumberItem.innerText = (circularPrimeNumber.toString());
            listPlaceHolder.appendChild(circularPrimeNumberItem);
        });
    }
    else {
        messages.innerHTML = getError(resultList);
    }
    ;
}));
var getError = function (resultList) {
    if (resultList === null)
        return 'Please, enter a number between 0 and 999999';
    else if (input.value === '')
        return 'Insert a number';
    else if (Number(input.value) < 2)
        return 'No results, try other number';
    return 'Unexpected error';
};
