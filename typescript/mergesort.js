function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        //splitting the array
        let left = arr.slice(0, arr.length / 2);
        console.log(left);
        let right = arr.slice(arr.length / 2, arr.length);
        console.log(right)
        return merge(mergesort(left), mergesort(right));
    }
}
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;
    for (let k = 0; k < left.length; k++) {
        if (left[i] < right[j]) {
            result[k] = left[i];
            i += 1;
        }
        else {
            result[k] = right[j];
            j += 1;
        }
    }
    return result;
}
console.log(mergesort([5, 4, 1, 8, 7, 2, 6, 3]));
//# sourceMappingURL=mergesort.js.map