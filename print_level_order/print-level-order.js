'use strict';

import Queue from 'queue-fifo';

const printLevelOrder = (kt) => {
  if (!kt.value) {
    return undefined;
  }
  const queue = new Queue();
  queue.enqueue(kt);
  let printedLevels = `${kt.value}\n`;
  let currentNode = null;
  let currentLevelCounter = 0;
  let nextLevelCounter = kt.children.length;

  while (!queue.isEmpty()) {
    currentNode = queue.dequeue();
    for (let i = 0; i < currentNode.children.length; i++) {
      printedLevels += `${currentNode.children[i].value}`;
      queue.enqueue(currentNode.children[i]);
    }

    if (currentLevelCounter !== 0) {
      nextLevelCounter += currentNode.children.length;
      currentLevelCounter -= 1;
    }

    if (currentLevelCounter === 0) {
      printedLevels += '\n';
      currentLevelCounter = nextLevelCounter;
      nextLevelCounter = 0;
    }
  }
  return printedLevels.trim();
};

export default printLevelOrder;
