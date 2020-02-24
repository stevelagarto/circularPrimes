/* eslint-env mocha */

const { isPrime } = require('../resources/main.js');
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
});
