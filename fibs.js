function fibs(n) {
  if (n == 1) {
    return [0];
  }
  let arr = [0, 1];
  let lastIndex = arr[arr.length - 1];
  let secondToLastIndex = arr[arr.length - 2];
  while (arr.length != n) {
    arr.push(lastIndex + secondToLastIndex);
    lastIndex = arr[arr.length - 1];
    secondToLastIndex = arr[arr.length - 2];
  }
  return arr;
}

function fibsRec(n) {
  if (n == 2) {
    return [0, 1];
  }

  let fibSequence = fibsRec(n - 1);
  let nextFib =
    fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
  fibSequence.push(nextFib);

  return fibSequence;
}

console.log(fibs(2));
console.log(fibsRec(8));
