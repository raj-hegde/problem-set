// let {name} = {name: "Faraji", age: 23}; // how to access age
// console.log();

/* Range and Sum */

// function range(start, end, step = start < end ? 1 : -1 ){
//   let ans = [];
//   if (step > 0) {
//     for (let i = start; i <= end; i += step) ans.push(i);
//     }else {
//     for (let i = start; i >  end; i += step) ans.push(i);
//     }
//      return ans;
// }
 

//console.log(range(1, 10, -2));

// function sum(total){
//   let ans = 0;
//   for (let tot of total){
//    ans += tot;
//   }
//   return ans;
// }

// console.log(sum(range(1, 10)));



/* Reverse an array into a new one and reverse in place */

// function reverseArray(string){
//   let ans = [];
//   for (let i = string.length - 1; i >= 0; i--){
//     ans.push(string[i]);
//   }
//   return ans;
// }

// string = ["Banana", "Orange", "Apple", "Mango"];
// console.log(reverseArray(string));



// function reverseArrayInPlace(array){
//     for (let i = 0; i < Math.floor(array.length / 2); i++){
//         let old = array[i];
//         array[i] = array[array.length -1 - i];
//         array[array.length - 1 - i] = old;
//     }
//     return array;
//  }
  
// array = ["Banana", "Orange", "Apple", "Mango"];
// console.log(reverseArrayInPlace(array));


/* Array to List and vice versa, find the nth element in the list */

// function arrayToList(array) {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//       list = {value: array[i], rest: list};
//     }
//     return list;
//   }

// //   console.log(arrayToList([10, 20]));

// function listToArray(list){
//     let array = [];
//     for (let node = list; node; node = node.rest){
//         array.push(node.value);
//     }
//     return array;
// }

// //console.log(listToArray(arrayToList([10, 20, 30])));

// function nth(list, n){
//     if(!list) return undefined;
//     else if (n == 0) return list.value;
//     else return nth(list.rest, n - 1);
// }

// console.log(nth(arrayToList([10, 20, 30]), 1));

/* Deep Comparison */

function deepEqual(a, b){
  
}