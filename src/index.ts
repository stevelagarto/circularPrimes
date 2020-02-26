'use strict';

import {
  listOfCircularPrimes
} from './helpers';

require('./style.css');
require('./normalize.css');

const input = (<HTMLInputElement>document.getElementById('input'));
const listPlaceHolder = (<HTMLInputElement>document.getElementById('results'));
const messages = (<HTMLInputElement>document.getElementById('messages'));

input.setAttribute('placeholder', 'Type here...');

input.addEventListener('focus', ((event: CustomEvent) => {
  event.preventDefault();
  input.setAttribute('placeholder', '');
}) as EventListener);

input.addEventListener('blur', ((event: CustomEvent) => {
  event.preventDefault();
  input.setAttribute('placeholder', 'Type here...');
}) as EventListener);

input.addEventListener('keyup', ((event: CustomEvent) => {
  event.preventDefault();
  const inputValue = Number(input.value);
  const resultList: Array<number> = listOfCircularPrimes(inputValue);

  listPlaceHolder.innerHTML = '';
  messages.innerHTML = '';

  if (resultList && resultList.length >= 1) {
    resultList.forEach((circularPrimeNumber) => {
      const circularPrimeNumberItem = document.createElement('DIV');
      circularPrimeNumberItem.classList.add('circularPrime');
      circularPrimeNumberItem.innerText = (circularPrimeNumber.toString());
      listPlaceHolder.appendChild(circularPrimeNumberItem);
    });
  } else {
    messages.innerHTML = getError(resultList);
  };
}) as EventListener);

const getError = (resultList: Array<number>): string => {
  if (resultList === null) return 'Please, enter a number between 0 and 999999';
  else if (input.value === '') return 'Insert a number';
  else if (Number(input.value) < 2) return 'No results, try other number';
  return 'Unexpected error';
};
