'use strict';

import Queue from '../queue-with-stacks/queue-with-stacks';

describe('queue-with-stacks.test.js', () => {
  describe('Queue', () => {
    const testQ = new Queue();
    testQ.enqueue(10);
    testQ.enqueue(25);
    testQ.enqueue(37);
    test('#enqueue, should insert value into stackA.', () => {
      expect(testQ.stackA.storage.head.value).toEqual(10);
    });
    test('#enqueue, should keep track of value on top of stack.', () => {
      expect(testQ.stackA.storage.tail.value).toEqual(37);
    });
    test('#enqueue, should keep track of stack size.', () => {
      expect(testQ.size).toEqual(3);
    });
    const deqTest = new Queue();
    deqTest.enqueue(5);
    test('#dequeue, should return first item entered into the queue.', () => {
      console.log('before', deqTest);
      expect(deqTest.dequeue()).toEqual(5);
    });
    test('#dequeue, should keep track of stackA head value.', () => {
      expect(testQ.stackA.head.value).toEqual(25);
    });
    test('#dequeue, should keep track of queue size.', () => {
      expect(testQ.size).toEqual(2);
    });
  });
});
