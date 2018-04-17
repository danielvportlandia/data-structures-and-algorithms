function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i - 1) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

reverseArray();
