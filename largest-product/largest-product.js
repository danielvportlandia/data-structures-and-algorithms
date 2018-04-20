'use strict';

const largestProduct = (arr) => {
  const len = arr.length - 1;
  let tempHighest = 0;
  const values = [arr[0][0] * arr[0][1], arr[len][0] * arr[len][1]];
  for (let i = 1; i < len; i++) {
    values[2] = arr[i][0] * arr[i - 1][0];
    values[3] = arr[i][0] * arr[i][1];
    values[4] = arr[i][0] * arr[i + 1][0];
    values[5] = arr[i][1] * arr[i - 1][1];
    values[6] = arr[i][1] * arr[i + 1][1];
    for (let j = 0; j < 6; j++) {
      if (values[j] > tempHighest) {
        tempHighest = values[j];
      }
    }
  }
  return tempHighest;
};
  
largestProduct([[1, 2], [3, 4], [5, 6], [7, 8]]);

exports.largestProduct = largestProduct;
