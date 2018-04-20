'use strict';

const largestProduct = require('../largest-product/largest-product');

describe('largest-product.test.js', () => {
  describe('largestProduct', () => {
    test('should return the highest integer value of two adjacent indexes in array.', () => {
      expect(largestProduct.largestProduct([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
    });
    test('should return second parameter at middle index (rounded up) in array when odd length.', () => {
      expect(largestProduct.largestProduct([[1, 1], [1, 1], [1, 1], [1, 1]])).toEqual(1);
    });
    test('should return empty array if first parameter is an empty array', () => {
      expect(largestProduct.largestProduct([1])).toEqual(0);
    });
  });
});
