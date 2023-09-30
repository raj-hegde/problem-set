function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        //splitting the array
        let left = arr.slice(0, Math.floor(arr.length / 2));
        let right = arr.slice(Math.floor(arr.length / 2));
        return merge(mergeSort(left), mergeSort(right));
    }
}
//merge subroutine
function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
console.log(mergeSort([5, 4, 1, 8, 7, 2, 6, 3]));
//# sourceMappingURL=mergesort.js.map