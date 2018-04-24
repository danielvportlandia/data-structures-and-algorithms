'use strict';

const LinkedList = require('../ll_kth_from_end/lib/linked-list');

describe('ll_kth_from_end.test.js', () => {
  describe('LinkedList', () => {
    test('#constructor', () => {
      const testList = new LinkedList();
      expect(testList.head).toBeNull();
    });
    test('#push, should be able to push into empty LinkedList.', () => {
      const testList = new LinkedList();
      testList.push(1);
      expect(testList.head.value).toEqual(1);
    });
    test('#push, should be able to push into LinkedList.', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.push(2);
      expect(testList.head.next.value).toEqual(2);
    });
    test('#kthFromEnd, should return last node if input is 0.', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.push(2);
      expect(testList.kthFromEnd(0)).toEqual({ next: null, value: 2 });
    });
    test('#kthFromEnd, should return a value in the LinkedList.', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.push(2);
      testList.push(3);
      expect(testList.kthFromEnd(1)).toEqual({ next: { next: null, value: 3 }, value: 2 });
    });
    test('#kthFromEnd, should throw error if LinkedList is empty', () => {
      const testList = new LinkedList();
      testList.push(1);
      testList.push(2);
      expect(() => { testList.kthFromEnd(4); }).toThrowError('Value indicated is larger than the LinkedList length.');
    });
  });
});
