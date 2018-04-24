'use strict';

const LinkedList = require('./lib/linked-list');

const testList = new LinkedList();

testList.append(13);
testList.append(27);
testList.append(99);
console.log('before test', testList);
testList.insertBefore(13, 10);

console.log('after test', testList);
console.log('second last', testList.head.next.next.value);
console.log('last value', testList.head.next.next.next);

