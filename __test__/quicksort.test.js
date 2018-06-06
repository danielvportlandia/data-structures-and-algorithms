'use strict';

import quickSort from '../quicksort/quicksort';

describe('quicksort.test.js', () => {
  describe('#quickSort', () => {
    const testArray = [34, 19, 42, -9, 2018, 0, 2005, 77, 2099];
    const emptyArray = [];
    test('Should return a sorted array.', () => {
      expect(quickSort(testArray, 0, 8)).toEqual([-9, 0, 19, 34, 42, 77, 2005, 2018, 2099]);
    });
    test('Should throw an error for an empty array.', () => {
      expect(() => quickSort(emptyArray, 0, 0)).toThrowError('Array cannot be empty.');
    });
    test('Should throw an error for an invalid data-type as an input.', () => {
      expect(() => quickSort(195952)).toThrowError('Input must be an array.');
    });
  });
});
