'use strict';

const merge = (left, right) => {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;
  
  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft += 1;
    } else {
      result.push(right[indexRight]);
      indexRight += 1;
    }
  }
  
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

const mergeSort = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid input, input must be an array.');
  }

  if (arr.length === 0) {
    throw new Error('Input array cannot be empty.');
  }

  if (arr.length === 1) {
    return arr;
  }

  const midPoint = Math.ceil(arr.length / 2);
  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
};

export default mergeSort;
