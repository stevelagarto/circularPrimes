'use strict';

import {
  listOfCircularPrimes
} from './helpers';

require('./style.css');
require('./normalize.css');

const input = (<HTMLInputElement>document.getElementById('input'));
const listPlaceHolder = (<HTMLInputElement>document.getElementById('results'));

input.setAttribute('placeholder', 'Insert a number...');

input.addEventListener('focus', ((event: CustomEvent) => {
  event.preventDefault();
  input.setAttribute('placeholder', '');
  // input.value = '';
}) as EventListener);

input.addEventListener('blur', ((event: CustomEvent) => {
  event.preventDefault();
  input.setAttribute('placeholder', 'Insert a number...');
  // input.value = '';
}) as EventListener);

input.addEventListener('keyup', ((event: CustomEvent) => {
  event.preventDefault();
  // if (input.value === '') input.setAttribute('placeholder', 'Insert a number...');
  const inputValue = Number(input.value);

  const resultList: Array<number> = listOfCircularPrimes(inputValue);

  listPlaceHolder.innerHTML = '';

  if (resultList && resultList.length >= 1) {
    resultList.forEach((circularPrimeNumber) => {
      const circularPrimeNumberItem = document.createElement('DIV');
      circularPrimeNumberItem.classList.add('circularPrime');
      circularPrimeNumberItem.innerText = (circularPrimeNumber.toString());
      listPlaceHolder.appendChild(circularPrimeNumberItem);
    });
  } else {
    listPlaceHolder.innerHTML = getError(resultList);
  };
  // input.value = '';
}) as EventListener);

const getError = (resultList: Array<number>): string => {
  if (resultList === null) return 'Wrong input, insert a number';
  else if (input.value === '') return 'Insert a number';
  else if (Number(input.value) < 2) return 'No results';
  return 'Unexpected error';
};

// PURE FUNCTIONS
// ---------------------------------------------------------------------------------------------------
