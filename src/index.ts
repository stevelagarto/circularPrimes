'use strict';

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
export {};
const isANumber = (userInput : number) : boolean => {
  if (userInput === null) return false;
  return !isNaN(userInput);
};

const isCircularPrime = (userInput : number) : boolean => {
  const numberLength: number = userInput.toString().length;
  for (let x = 0; x < numberLength; x++) {
    if (!isPrime(userInput)) return false;
    userInput = numberCircularVariation(userInput);
  }

  return true;
};

const numberCircularVariation = (number: number) : number => {
  const numberToString: string = number.toString();
  const stringLength: number = numberToString.length;
  const newNumberCircularVariation = parseInt(numberToString.substr(-1, 1) + numberToString.substr(0, stringLength - 1));

  return newNumberCircularVariation;
};

const isPrime = (num : number): boolean => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const listOfCircularPrimes = (userInput: number): any => {
  const circularPrimesList: Array<number> = [];
  if (isANumber(userInput)) {
    for (let x = 2; x <= userInput; x++) {
      isCircularPrime(x) && circularPrimesList.push(x);
    }

    return circularPrimesList;
  } else return null;
};
