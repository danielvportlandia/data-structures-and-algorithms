'use strict';

import Stack from './lib/stack';

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
    this.size = this.stackA.storage.length;
  }

  enqueue(value) {
    this.size += 1;
    return this.stackA.push(value);
  }

  dequeue() {
    this.stackB.storage.head = this.stackA.storage.head;
    let temp = null;
    let prev = null;

    while (!temp) {
      prev = temp;
      temp = this.stackA.pop();
    }
    temp = prev;
    this.stackB.storage.head = this.stackB.storage.head.next;
    this.stackA.storage.head = this.stackB.storage.head;
    this.stackB.storage.head = { length: 0, head: null, next: null };
    this.size -= 1;
    return temp;
  }
}

export default Queue;
