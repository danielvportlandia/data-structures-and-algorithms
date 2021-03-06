'use strict';

import Node from './node';

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) { // Big O(n)
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length += 1;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.tail = currentNode.next;
    this.length += 1;

    return this;
  }

  pop() { // Big O(n)
    if (this.length === 0) {
      return undefined;
    }

    let currentNode = this.head;
    if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return currentNode.value;
    }
    while (currentNode.next) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode;
        currentNode.next = null;
        this.length -= 1;
        return this;
      }
      currentNode = currentNode.next;
    }

    return this;
  }
}

export default LinkedList;
