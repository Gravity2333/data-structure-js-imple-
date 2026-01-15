function MergeSort(arr = []) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr;

  const mid = Math.trunc(arr.length / 2);
  const sortedLeft = MergeSort(arr.slice(0, mid));
  const sortedRight = MergeSort(arr.slice(mid));

  const sortedList = [];
  let leftPtr = 0;
  let rightPtr = 0;

  while (leftPtr < sortedLeft.length && rightPtr < sortedRight.length) {
    if (sortedLeft[leftPtr] <= sortedRight[rightPtr]) {
      sortedList.push(sortedLeft[leftPtr++]);
    } else {
      sortedList.push(sortedRight[rightPtr++]);
    }
  }

  while (leftPtr < sortedLeft.length) {
    sortedList.push(sortedLeft[leftPtr++]);
  }

  while (rightPtr < sortedRight.length) {
    sortedList.push(sortedRight[rightPtr++]);
  }

  return sortedList;
}

const list = [
  1, 10, 2, 20, 10, 1, 1, 100, 0, -1, 24, 1, 23494, 1230, 10, 303, 40, 530, 6,
  1, -1, 0, 0, 0, 4, 2, 3, 4, 5, 1, 11, 111, 22, 2334,
];

MergeSort(list);
