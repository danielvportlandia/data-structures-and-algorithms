'use strict';

const isPermutation = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('Invalid input(s). Expected both inputs to be strings.');
  }
  if (str1.length !== str2.length) {
    return false;
  }

  const arr1 = str1.split('');
  arr1.sort();

  const arr2 = str2.split('');
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

export default isPermutation;
