
export const isANumber = (userInput : number) : boolean => {
  if (userInput === null) return false;
  return !isNaN(userInput);
};

export const isCircularPrime = (userInput : number) : boolean => {
  const numberLength: number = userInput.toString().length;
  for (let x = 0; x < numberLength; x++) {
    if (!isPrime(userInput)) return false;
    userInput = numberCircularVariation(userInput);
  }

  return true;
};

export const numberCircularVariation = (number: number) : number => {
  const numberToString: string = number.toString();
  const stringLength: number = numberToString.length;
  const newNumberCircularVariation = parseInt(numberToString.substr(-1, 1) + numberToString.substr(0, stringLength - 1));

  return newNumberCircularVariation;
};

export const isPrime = (num : number): boolean => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const listOfCircularPrimes = (userInput: number): any => {
  const circularPrimesList: Array<number> = [];
  if (isANumber(userInput)) {
    for (let x = 2; x <= userInput; x++) {
      isCircularPrime(x) && circularPrimesList.push(x);
    }

    return circularPrimesList;
  } else return null;
};
