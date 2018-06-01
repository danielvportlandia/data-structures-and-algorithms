'use strict';

import leftJoin from '../left_join/left-join';

const hm1 = new Map();
const hm2 = new Map();
const hm3 = new Map();
const hm4 = new Map();

hm1.set('fond', ['love']);
hm1.set('wrath', ['anger', 'steamed']);
hm2.set('fond', ['hate', 'loathe']);
hm2.set('short', ['small']);
hm2.set('alive', ['dead']);

hm3.set('fond', ['love']);
hm3.set('wrath', ['anger', 'steamed']);
hm4.set('fond', ['hate', 'loathe']);
hm4.set('short', ['small']);
hm4.set('alive', ['dead']);

describe('left-join.test.js', () => {
  describe('#leftJoin', () => {
    const testLeftHash = leftJoin(hm1, hm2);
    test('Should add the values to the key in the first hashmap from the second hashmap of a matching key.', () => {
      expect(testLeftHash.get('fond')).toEqual(['love', 'hate', 'loathe']);
    });
    test('Should add null to end of values whose key does not exist in the second hashmap.', () => {
      expect(testLeftHash.get('wrath')).toEqual(['anger', 'steamed', null]);
    });
    test('Should throw an error for invalid input(s).', () => {
      expect(() => leftJoin(123, hm2)).toThrowError('Invalid input(s).');
    });
  });

  describe('#rightJoin', () => {
    const testRightHash = leftJoin(hm3, hm4, 'right');
    test('Should add the values to the key in the second hashmap from the first hashmap of a matching key.', () => {
      expect(testRightHash.get('fond')).toEqual(['hate', 'loathe', 'love']);
    });
    test('Should add null to end of values whose key does not exist in the first hashmap.', () => {
      expect(testRightHash.get('alive')).toEqual(['dead', null]);
    });
  });
});
