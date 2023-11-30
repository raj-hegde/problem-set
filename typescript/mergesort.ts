function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  } else {
    //splitting the array
    let left: number[] = arr.slice(0, Math.floor(arr.length / 2));
    let right: number[] = arr.slice(Math.floor(arr.length / 2));

    return merge(mergeSort(left), mergeSort(right));
  }
}

//merge subroutine
function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(mergeSort([5, 4, 1, 8, 7, 2, 6, 3]));
