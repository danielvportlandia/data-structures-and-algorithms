'use strict';

const hashingAlg = (key) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
};

const repeatedWord = (str) => {
  if (str === '') {
    throw new Error('Input cannot be an empty string.');
  }
  if (typeof str !== 'string') {
    throw new Error('Input must be a string.');
  }

  const splitArr = str.replace(/(\.|,)/g, '').split(/\s/);
  const hm = new Map();

  for (let i = 0; i < splitArr.length; i++) {
    const item = hm.get(splitArr[i]);
    if (!item) {
      hm.set(splitArr[i], hashingAlg(splitArr[i]));
    } else {
      return splitArr[i];
    }
    if (i === splitArr.length - 1) {
      throw new Error('No duplicate words in input.');
    }
  }
  
  return undefined;
};

export default repeatedWord;
