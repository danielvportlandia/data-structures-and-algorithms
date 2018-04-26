'use strict';

const LinkedList = require('./lib/linked-list');
const Node = require('./lib/node');

const testList1 = new LinkedList();
testList1.push('A');
testList1.push('B');
testList1.push('C');

const testList2 = new LinkedList();
testList2.push('E');
testList2.push('F');
testList2.push('G');

const mergeLists = (testList1, testList2) => {
  let currentNode1 = testList1.head.next;
  let currentNode2 = testList2.head;
  let insertNode = currentNode2;

  // const smallLength = (testList1.length <= testList2.length) ? testList1.length : testList2.length;

  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      currentNode2 = currentNode2.next;
    }
    if (!currentNode1.next) {
      testList1.push(currentNode2);
    } else {
      currentNode1 = currentNode1.next;
    }
    if (currentNode2.next) {
      currentNode2 = currentNode2.next;
    }
    testList1.insertBefore(currentNode1.next, insertNode.value);
    insertNode = currentNode2;
  }
  return testList1;
};

mergeLists(testList1, testList2);
  console.log(testList1.head);
