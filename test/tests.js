/* eslint-env mocha */

const { isPrime, isANumber } = require('../resources/main.js');
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
});
