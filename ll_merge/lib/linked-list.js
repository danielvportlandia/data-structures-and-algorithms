'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;

    return this;
  }

  insertBefore(value, newVal) {
    if (!this.head) {
      return undefined;
    }
    if (this.head.value === value) {
      const tempNode = this.head;
      this.head = new Node(newVal);
      this.head.next = tempNode;
      this.length += 1;
      return this;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;
    while (currentNode) {
      if (!currentNode.next) {
        return this;
      }
      if (currentNode.value === value) {
        previousNode.next = new Node(newVal);
        previousNode.next.next = currentNode;
        this.length += 1;
        return this;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    return undefined;
  }


};
