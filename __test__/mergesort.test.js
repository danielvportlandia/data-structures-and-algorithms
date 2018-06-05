'use strict';

import mergeSort from '../mergesort/mergesort';

describe('mergesort.test.js', () => {
  describe('#mergeSort', () => {
    const testArray = [34, 19.1, 42, -9.525848, 2018, 0, 2005, 77.76, 2099];
    const emptyArray = [];
    test('Should sort an array regardless of negative values or values with decimal points.', () => {
      expect(mergeSort(testArray)).toEqual([-9.525848, 0, 19.1, 34, 42, 77.76, 2005, 2018, 2099]);
    });
    test('Should throw error if input array is empty.', () => {
      expect(() => mergeSort(emptyArray)).toThrowError('Input array cannot be empty.');
    });
    test('Should throw error if input is not an array.', () => {
      expect(() => mergeSort(129348)).toThrowError('Invalid input, input must be an array.');
    });
  });
});
