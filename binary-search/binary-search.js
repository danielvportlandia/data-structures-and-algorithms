'use strict';

const binarySearch = (array, searchKey) => {
  let answer = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchKey) {
      answer = i;
    }
  }
  return answer;
};

binarySearch([1, 2, 3, 4], 9);

exports.binarySearch = binarySearch;
