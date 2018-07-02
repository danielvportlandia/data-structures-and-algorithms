'use strict';

import isPermutation from '../strings/check-permutation/check-permutation';

describe('check-permutation.test.js', () => {
  describe('#isPermutation', () => {
    test('Should return true if one input is a permutation of the other.', () => {
      const matchingString1 = 'these strings should match.';
      const matchingString2 = 'should these strings match.';
      expect(isPermutation(matchingString1, matchingString2)).toBeTruthy();
    });
    test('Should return false if one input is not a permutation of the other.', () => {
      const unmatchedString1 = 'these strings should match?';
      const unmatchedString2 = 'should these strings match.';
      expect(isPermutation(unmatchedString1, unmatchedString2)).toBeFalsy();
    });
    test('Should return false if one input is longer than the other.', () => {
      const shortString = 'This is the short string.';
      const longString = 'This is the long string which will cause an early false return.';
      expect(isPermutation(shortString, longString)).toBeFalsy();
    });
    test('Should throw an error if one if the inputs is not a string.', () => {
      const errorString = 'Other input will throw an error.';
      expect(() => isPermutation(errorString, 123)).toThrowError('Invalid input(s). Expected both inputs to be strings.');
    });
  });
});
