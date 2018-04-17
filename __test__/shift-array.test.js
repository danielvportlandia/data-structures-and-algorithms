'use strict';

const shiftArray = require('../shift-array/shift-array');

describe('shift-array.test.js', () => {
  describe('shiftArray', () => {
    test('should return second parameter at middle index in array when even length.', () => {
      expect(shiftArray.insertShiftArray([1, 2, 3, 4], 9)).toEqual([1, 2, 9, 3, 4]);
    });
    test('should return second parameter at middle index (rounded up) in array when odd length.', () => {
      expect(shiftArray.insertShiftArray([1, 11, 12, 13, 14], 20)).toEqual([1, 11, 12, 20, 13, 14]);
    });
    test('should return empty array if first parameter is an empty array', () => {
      expect(shiftArray.insertShiftArray([], 10)).toEqual([]);
    });
  });
});

