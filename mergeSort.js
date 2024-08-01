function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const finalArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      finalArray.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      finalArray.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return [
    ...finalArray,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

const array = [3, 2, 1, 6, 8, 13, 2];
console.log(mergeSort(array));
