'use strict';

const leftJoin = (hashmap1, hashmap2, joinType) => {
  if (typeof hashmap1 !== 'object' || typeof hashmap2 !== 'object') {
    throw new Error('Invalid input(s).');
  }
  if (joinType === 'right') {
    hashmap2.forEach((value, key) => {
      const currentVal = hashmap1.get(key);
      if (currentVal) {
        for (let i = 0; i < currentVal.length; i++) {
          value.push(currentVal[i]);
        }
      } else {
        value.push(null);
      }
    });
    return hashmap2;
  }

  hashmap1.forEach((value, key) => {
    const currentVal = hashmap2.get(key);
    if (currentVal) {
      for (let i = 0; i < currentVal.length; i++) {
        value.push(currentVal[i]);
      }
    } else {
      value.push(null);
    }
  });
  return hashmap1;
};

const hm1 = new Map();
const hm2 = new Map();

hm1.set('fond', ['love']);
hm1.set('wrath', ['anger', 'steamed']);
hm2.set('fond', ['hate', 'loathe']);
hm2.set('short', ['small']);
hm2.set('alive', ['dead']);

export default leftJoin;
