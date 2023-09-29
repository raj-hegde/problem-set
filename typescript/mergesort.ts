function mergesort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  } else {
    //splitting the array
    let left: number[] = arr.slice(0, arr.length / 2);
    console.log(left);
    let right: number[] = arr.slice(arr.length / 2, arr.length);
    console.log(right);

    return merge(mergesort(left), mergesort(right));
  }
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  for (let k: number = 0; k < left.length; k++) {
    if (left[i] < right[j]) {
      result[k] = left[i];
      result[k+1] = right[j];
      i += 1;
    } else {
      result[k] = right[j];
      result[k+1] = left[i];
      j += 1;
    }
  }
  return result;
}

console.log(mergesort([5, 4, 1, 8, 7, 2, 6, 3]));
