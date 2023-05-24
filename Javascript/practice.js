// function deepEqual(a, b){
//     let KeysA = Object.keys(a), KeysB = Object.keys(b);
//     console.log(KeysA, KeysB);
//     for (let key of KeysA){
//         if (!KeysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
// }

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));

let labels = [];
repeat(5, i => {
    return labels.push(`Unit ${i + 1}`);
});
console.log();