'use strict';

import Stack from './lib/stack';

class StackOverflow {
  constructor() {
    this.collection = [new Stack()];
    this.threshold = 3;
  }

  push(value) {
    if (this.collection[this.collection.length - 1].storage.length === this.threshold) {
      this.collection.push(new Stack());
    }

    return this.collection[this.collection.length - 1].push(value);
  }

  pop() {
    if (this.collection[this.collection.length - 1] > 1) {
      return this.collection[this.collection.length - 1].pop();
    }

    const temp = this.collection[this.collection.length - 1].pop();
    this.collection.pop();
    return temp;
  }

  popAt(index) {
    if (!this.collection[index]) {
      throw new Error('Invalid index');
    }
    if (this.collection[index].storage.length > 1) {
      return this.collection[index].pop();
    }

    const temp = this.collection[index].pop();
    this.collection.splice(index, 1);
    return temp;
  }
}

export default StackOverflow;
