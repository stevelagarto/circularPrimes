'use strict';
exports.__esModule = true;
var helpers_1 = require("./helpers");
require('./style.css');
require('./normalize.css');
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
    var resultList = helpers_1.listOfCircularPrimes(inputValue);
    listPlaceHolder.innerHTML = '';
    if (resultList && resultList.length >= 1) {
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
