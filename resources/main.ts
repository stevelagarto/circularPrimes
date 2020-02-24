'use strict';

const isANumber = (userInput : number) : boolean => !isNaN(userInput);

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

const listOfCircularPrimes = (userInput: number): Array<number> => {
  const circularPrimesList: Array<number> = [];
  if (isANumber(userInput)) {
    for (let x = 2; x <= userInput; x++) {
      isCircularPrime(x) && circularPrimesList.push(x);
    }
    console.log('Result', circularPrimesList);
    return circularPrimesList;
  }
};

export {
  isANumber,
  isCircularPrime,
  numberCircularVariation,
  listOfCircularPrimes,
  isPrime
};
