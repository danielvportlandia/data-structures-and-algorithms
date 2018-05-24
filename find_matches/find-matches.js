'use strict';

import Stack from 'stack-lifo';
import Queue from 'queue-fifo';

const findMatches = (root, val) => {
  if (!root) {
    return undefined;
  }
  const q = new Queue(root);
  const s = new Stack();

  let currentNode = null;
  while (!q.isEmpty()) {
    currentNode = q.dequeue();
    if (currentNode.value === val) {
      s.push(currentNode.value);
    }
    if (currentNode.children > 0) {
      for (let i = 0; i < currentNode.children.length; i++) {
        q.enqueue(currentNode.children[i]);
      }
    }
  }
  return s;
};

export default findMatches;
