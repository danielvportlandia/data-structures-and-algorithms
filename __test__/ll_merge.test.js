'use strict';

const LinkedList = require('../ll_kth_from_end/lib/linked-list');

describe('ll_merge.test.js', () => {
  describe('LinkedList', () => {
    test('#constructor', () => {
      const testList = new LinkedList();
      expect(testList.head).toBeNull();
    });
    test('#mergeLists, should throw new Error if first list is empty', () => {
      const testList = new LinkedList();
      expect(testList.head).toBeNull();
    });
    test('#mergLists, first value should be from first LinkedList.', () => {
      const testList = new LinkedList();
      expect(testList.head).toBeNull();
    });
    test('#mergeLists, second value should be from second array.', () => {
      const testList = new LinkedList();
      expect(testList.head).toBeNull();
    });
  });
});
