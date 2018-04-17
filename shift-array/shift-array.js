'use strict';

const insertShiftArray = (array, newVal) => {
  let halfVal = Math.ceil(array.length / 2);
  const shiftedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i === halfVal) {
      shiftedArr[i] = newVal;
      halfVal = 0;
      i -= 1;
    } else if (i > halfVal) {
      shiftedArr[i + 1] = array[i];
    } else {
      shiftedArr[i] = array[i];
    }
  }
  return shiftedArr;
};

insertShiftArray([1, 2, 3, 4], 9);

exports.insertShiftArray = insertShiftArray;
