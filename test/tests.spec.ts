/* eslint-env mocha */

const {
  isPrime,
  isANumber,
  numberCircularVariation,
  isCircularPrime,
  listOfCircularPrimes
} = require('../src/helpers.ts');
const { assert } = require('chai');

describe('CircularPrimes Functions', () => {
  describe('isPrime()', () => {
    it('Check correctly if a number is prime', () => {
      const primeNumbers = [2, 3, 5, 7, 11, 13];

      primeNumbers.forEach(primeNumber => {
        assert.isTrue(isPrime(primeNumber));
      });
    });

    it('Check correctly if a number is not prime', () => {
      const notPrimeNumbers = [1, 4, 6, 8, 10, 12];

      notPrimeNumbers.forEach(notPrimeNumber => {
        assert.isFalse(isPrime(notPrimeNumber));
      });
    });
    it('If argument is <= 1 returns false', () => {
      const underOrEqualOne = [1, 0, -1];

      underOrEqualOne.forEach(underOrEqualOne => {
        assert.isFalse(isPrime(underOrEqualOne));
      });
    });
    it('If argument is NaN', () => {
      const notANumber = ['string', {}, null, undefined];

      notANumber.forEach(notANumber => {
        assert.isFalse(isPrime(notANumber));
      });
    });
  });

  describe('isANumber()', () => {
    it('If value is a number returns true', () => {
      const numbers = [-1, 0, 1, 5, 10, 1000];
      numbers.forEach(number => {
        assert.isTrue(isANumber(number));
      });
    });
    it('If value is not a number return false', () => {
      const notNumbers = ['string', {}, undefined];
      notNumbers.forEach(notNumber => {
        assert.isFalse(isANumber(notNumber));
      });
    });
    it('If value is null return null', () => {
      assert.isFalse(isANumber(null));
    });
  });

  describe('numberCircularVariation()', () => {
    it('Should return next number circular variation', () => {
      const expectedVariation = 197;
      const numberForVariaton = 971;
      const expectedVariation2 = 719;

      const result = numberCircularVariation(numberForVariaton);
      const result2 = numberCircularVariation(result);

      assert.equal(result, expectedVariation);
      assert.equal(result2, expectedVariation2);
    });
  });

  describe('isCircularPrime()', () => {
    it('Should return true if number is circular prime', () => {
      const circularPrimes = [2, 3, 5, 7, 11, 31, 197];
      circularPrimes.forEach(circularPrime => {
        assert.isTrue(isCircularPrime(circularPrime));
      });
    });
    it('Should return false if number is not circular prime', () => {
      const notCircularPrimes = [-1, 0, 1, 4, 20, 101];
      notCircularPrimes.forEach(notCircularPrime => {
        assert.isFalse(isCircularPrime(notCircularPrime));
      });
    });
  });

  describe('listOfCircularPrimes()', () => {
    it('Should return the list of circular primes below a given number (number included)', () => {
      const inputValue = 100;
      const expectedList = [2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97];

      const result = listOfCircularPrimes(inputValue);

      assert.deepEqual(result, expectedList);
    });
  });
});
