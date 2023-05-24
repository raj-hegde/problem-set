// function deepEqual(a, b){
//     let KeysA = Object.keys(a), KeysB = Object.keys(b);
//     console.log(KeysA, KeysB);
//     for (let key of KeysA){
//         if (!KeysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
// }

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));

/* Flattening of arrays */
// let arrays = [[1,2,3], [4,5], [6]];
// console.log(arrays.reduce((flat, current) => flat.concat(current), []));

/* Your own loop */
// function loop(start, test, update, body){
//     for (let value = start; test(value); value = update(value)){
//         body(value);
//     }
// }

// loop(3, n => n > 0, n => n - 1, console.log);

/* Everything function */
// function every(array, predicate){
//     for (let element of array){
//         if(!predicate(element)) return false;
//     }
//     return true;
// }

// console.log(every([1,3,5], n => n < 10));

// function every2(array, predicate){
//     return !array.some(element => !predicate(element));
// }
// console.log(every2([1,3,5], n => n < 10));

/* Dominant writing direction */

