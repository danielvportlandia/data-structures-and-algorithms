'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
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

  kthFromEnd(k) {
    if (!this.head) {
      throw new Error('invalid entry, empty LinkedList');
    }
    let currentNode = this.head;
    let len = 1;
    while (currentNode.next) {
      len += 1;
      currentNode = currentNode.next;
    }
    const newLen = len - k;

    if (newLen < 0) {
      throw Error('Value indicated is larger than the LinkedList length.');
    }

    currentNode = this.head;
    for (let i = 1; i <= newLen; i++) {
      if (i === newLen) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }
};

