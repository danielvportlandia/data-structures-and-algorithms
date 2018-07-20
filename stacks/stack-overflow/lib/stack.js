'use strict';

import LinkedList from './linked-list';

class Stack {
  constructor() {
    this.storage = new LinkedList();
  }

  push(value) {
    return this.storage.push(value);
  }

  pop() {
    if (!this.storage.head) {
      return new Error('Invalid operation, the stack is empty.');
    }
    const popVal = this.storage.tail.value;
    this.storage.pop();
    return popVal;
  }

  peek() {
    if (!this.storage.head) {
      return undefined;
    }
    return this.storage.tail.value;
  }

  isEmpty() {
    if (this.storage.length === 0) {
      return true;
    } 
    return false;
  }
};

export default Stack;
