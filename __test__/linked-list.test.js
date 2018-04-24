'use strict';

const LinkedList = require('../ll_insertions/lib/linked-list');

describe('linked-list.test.js', () => {
  describe('LinkedList', () => {
    test('#constructor', () => {
      const testList = new LinkedList();
      expect(testList.head).toBeNull();
    });
    test('#append, should insert value into empty LinkedList.', () => {
      const testList = new LinkedList();
      testList.append(1);
      expect(testList.head.value).toEqual(1);
    });
    test('#append, should insert value at end of LinkedList.', () => {
      const testList = new LinkedList();
      testList.append(1);
      testList.append(2);
      expect(testList.head.next.value).toEqual(2);
    });
    test('#append, should accurately track the LinkedList length property.', () => {
      const testList = new LinkedList();
      testList.append(1);
      testList.append(2);
      testList.append(3);
      expect(testList).toHaveLength(3);
    });
    test('#insertBefore, should be able to insert before the first node.', () => {
      const testList = new LinkedList();
      testList.append(1);
      testList.insertBefore(1, 2);
      expect(testList.head.value).toEqual(2);
    });
    test('#insertBefore, should be able to insert before selected value.', () => {
      const testList = new LinkedList();
      testList.append(1);
      testList.append(2);
      testList.append(3);
      testList.insertBefore(2, 4);
      expect(testList.head.next.value).toEqual(4);
    });
    test('#insertBefore, should accurately track the LinkedList length property.', () => {
      const testList = new LinkedList();
      testList.append(1);
      expect(testList.head.value).toEqual(1);
    });
    test('#insertAfter, should be able to insert after selected value.', () => {
      const testList = new LinkedList();
      testList.append(1);
      testList.append(2);
      testList.append(3);
      testList.insertAfter(2, 4);
      expect(testList.head.next.next.value).toEqual(2);
    });
    test('#insertAfter, should accurately track the LinkedList length property.', () => {
      const testList = new LinkedList();
      testList.append(1);
      testList.insertAfter(1, 2);
      expect(testList).toHaveLength(2);
    });
  });
});
