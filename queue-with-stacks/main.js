'use strict';

import Queue from './queue-with-stacks';

const testQ = new Queue();

testQ.enqueue(10);
testQ.enqueue(15);
testQ.enqueue(20);
console.log(testQ);
