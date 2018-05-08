'use strict';

import Queue from 'queue-fifo';

const breadthFirstTraversal = (rootNode) => {
  let breadthFirstStr = '';
  if (!rootNode) {
    return undefined;
  }
  const traversalQueue = new Queue();
  traversalQueue.enqueue(rootNode);

  while (!traversalQueue.isEmpty()) {
    const node = traversalQueue.dequeue();
    breadthFirstStr += `,${node.value}`;
    if (node.left) {
      traversalQueue.enqueue(node.left);
    }
    if (node.right) {
      traversalQueue.enqueue(node.right);
    }
  }
  return breadthFirstStr.replace(/^,/, '');
};

export default breadthFirstTraversal;
