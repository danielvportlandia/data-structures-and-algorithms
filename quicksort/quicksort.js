'use strict';

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex += 1;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
};

const quickSort = (arr, left, right) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }
  if (arr.length === 0) {
    throw new Error('Array cannot be empty.');
  }
  let pivot = null;
  let partitionIndex = null;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
   
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

export default quickSort;
