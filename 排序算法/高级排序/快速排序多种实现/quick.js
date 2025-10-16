function swap(index1, index2, list) {
  if (index1 >= list.length || index2 >= list.length) return;
  const temp = list[index1];
  list[index1] = list[index2];
  list[index2] = temp;
}

function quick(arr, begin, end) {
  if (begin >= end - 1) return;
  const pivot = arr[begin];
debugger
  let left = begin;
  let right = end;
  while (left < right) {
    do {
      left++;
    } while (left < right && arr[left] < pivot);
    do {
      right--;
    } while (left < right && arr[right] > pivot);

    if (left < right) {
      swap(left, right, arr);
    }
  }

  const s = left === right ? right - 1 : right;
  swap(s, begin, arr);

  quick(arr, begin, s);
  quick(arr, s + 1, end);
}

const arr = [7, 3, 100,6, 1, 9, 12];

quick(arr, 0, arr.length);
console.log(arr);
