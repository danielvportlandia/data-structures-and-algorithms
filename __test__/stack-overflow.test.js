'use strict';

import StackOverflow from '../stacks/stack-overflow/stack-overflow';

describe('stack-overflow.test.js', () => {
  describe('StackOverflow Class', () => {
    test('#push, should be able to add a value to the class collection.', () => {
      const testOverflow1 = new StackOverflow();
      testOverflow1.push(1);

      expect(testOverflow1.collection.length).toEqual(1);
      expect(testOverflow1.collection[0].storage.head.value).toEqual(1);
    });
    test('#push, should be able to add multiple values and create new collection index.', () => {
      const testOverflow2 = new StackOverflow();
      testOverflow2.push(1);
      testOverflow2.push(2);
      testOverflow2.push(3);
      testOverflow2.push(4);
      testOverflow2.push(5);
      
      expect(testOverflow2.collection.length).toEqual(2);
      expect(testOverflow2.collection[1].storage.head.value).toEqual(4);
    });
    test('#pop, should be able to pop value off from last the last stack in the collection.', () => {
      const testOverflow3 = new StackOverflow();
      testOverflow3.push(1);
      testOverflow3.push(2);
      testOverflow3.push(3);
      testOverflow3.push(4);
      testOverflow3.push(5);

      expect(testOverflow3.collection.length).toEqual(2);
      expect(testOverflow3.pop()).toEqual(5);
    });
    test('#pop, should remove the last stack if the last value in it is popped off.', () => {
      const testOverflow4 = new StackOverflow();
      testOverflow4.push(1);
      testOverflow4.push(2);
      testOverflow4.push(3);
      testOverflow4.push(4);
      testOverflow4.pop();

      expect(testOverflow4.collection.length).toEqual(1);
    });
    test('#popAt, should be able to pop value off from the selected stack in the collection.', () => {
      const testOverflow5 = new StackOverflow();
      testOverflow5.push(1);
      testOverflow5.push(2);
      testOverflow5.push(3);
      testOverflow5.push(4);
      testOverflow5.push(5);
      testOverflow5.push(6);
      testOverflow5.push(7);

      expect(testOverflow5.collection.length).toEqual(3);
      expect(testOverflow5.popAt(1)).toEqual(6);
      expect(testOverflow5.collection[1].storage.tail.value).toEqual(5);
    });
    test('#popAt, should be able to pop value off last value from selected index and remove index.', () => {
      const testOverflow6 = new StackOverflow();
      testOverflow6.push(1);
      testOverflow6.push(2);
      testOverflow6.push(3);
      testOverflow6.push(4);
      testOverflow6.push(5);
      testOverflow6.push(6);
      testOverflow6.push(7);
      testOverflow6.popAt(1);
      testOverflow6.popAt(1);

      expect(testOverflow6.popAt(1)).toEqual(4);
      console.log(testOverflow6.collection);
      expect(testOverflow6.collection.length).toEqual(2);
    });
    test('#popAt, should throw an error if the index value is higher than the collection length.', () => {
      const testOverflow7 = new StackOverflow();
      testOverflow7.push(1);
      testOverflow7.push(2);
      testOverflow7.push(3);
      testOverflow7.push(4);
      testOverflow7.push(5);
      testOverflow7.push(6);
      testOverflow7.push(7);

      expect(() => testOverflow7.popAt(4)).toThrowError('Invalid index');
    });
  });
});
