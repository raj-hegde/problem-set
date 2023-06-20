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
// got to check it out tomorrow

// function normalize(){
//     console.log(this.coords.map(n => n / this.length));
// }
// normalize.call({coords: [0, 2, 3], length: 5});

// let protoRabbit = {
//     speak(line) {
//     console.log(`The ${this.type} rabbit says ${line}`);
//     }
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEE!");

// let lengthOfLastWord = function(s){
//     let arr = s.split(" ");
//     console.log(arr[arr.length - 1].length);
//
// }
//
// lengthOfLastWord("Hello World");

// function Rabbit(type){
//     this.type = type;
// }
// Rabbit.prototype.speak = function(line){
//     console.log("This ${this.type} rabbit  says ${line}");
// };

// let wierdRabbit = new Rabbit("weird");

// let ages = {
//     Boris: 39,
//     Liang: 22,
//     Julia: 62
// };

// console.log(ages.Boris);
// console.log("Liang" in ages);
// console.log("mark" in ages);
// console.log("toString" in ages);
// console.log("valuesOf" in ages);

// const toStringSymbol = Symbol("toString");
// let stringObject = {
//     [toStringSymbol] () {return 'a jute tope';}
// };
// console.log(stringObject[toStringSymbol]());

// var resultString = "<p>This page \u00A9 Shelly Powers </p>";

// var blk = document.getElementById("result");
// blk.innerHTML = resultString;


// var sentence = 'This is one sentence. This is a sentence with a list of items:' +
// 'cherries, oranges, apples, bananas. That was the list of items.';

// var start = sentence.indexOf(':');
// var end = sentence.indexOf('.', start+1);

// var listStr = sentence.substring(start+1, end);
// console.log(listStr);

// var fruits = listStr.split(',');
// console.log(fruits);

// Matrix class acting as a 2D Array
// class Matrix{
//   constructor(width, height, element = (x, y) => undefined){
//     this.width = width;
//     this.height = height;
//     this.content = [];

//     for (let y = 0; y < height; y++){
//       for (let x = 0; x < width; x++){
//         this.content[y * width + x] = element(x, y);
//       }
//     }
//   }
//   get(x, y) {
//     return this.content[y * this.width + x];
//   }
//   set(x, y, value) {
//     this.content[y * this.width + x] = value;
//   }
// }

// class MatrixIterator {
//   constructor(matrix) {
//     this.x = 0;
//     this.y = 0;
//     this.matrix = matrix;
//   }

//   next(){
//     if (this.y == this.matrix.height) return {done: true};

//     let value = {x: this.x,
//                  y: this.y,
//                  value: this.matrix.get(this.x, this.y)};
//     this.x++;

//     if (this.x == this.matrix.width) {
//       this.x = 0;
//         this.y++;
//       }
//       return {value, done: false};
//   }
// }

// Matrix.prototype[Symbol.iterator] = function() {
//   return new MatrixIterator(this);
// };

// let matrix = new Matrix(2, 2, (x, y) => `value ${x}, ${y}`);
// for (let {x, y, value} of matrix){
//   console.log(x, y, value);
// }
// Matrix class ends here

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};
console.log(varyingSize.size);










