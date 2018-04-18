'use strict';

const binarySearch = require('../binary-search/binary-search');

describe('binary-search.test.js', () => {
  describe('binarySearch', () => {
    test('should return matching index of array (1).', () => {
      expect(binarySearch.binarySearch([1, 2, 3, 4], 2)).toEqual(1);
    });
    test('should return matching index of array (3).', () => {
      expect(binarySearch.binarySearch([1, 2, 3, 4], 4)).toEqual(3);
    });
    test('should return -1 due to element not in array.', () => {
      expect(binarySearch.binarySearch([1, 2, 3, 4], 5)).toEqual(-1);
    });
  });
});
