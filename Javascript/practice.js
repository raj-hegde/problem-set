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

// let varyingSize = {
//   get size() {
//     return Math.floor(Math.random() * 100);
//   }
// };
// console.log(varyingSize.size);

// class Temperature {
//   constructor(celsius) {
//       this.celsius = celsius;
//   }
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }
//   static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }

// let temp = new Temperature(22);
// console.log(temp.fahrenheit);

// temp.fahrenheit = 86;
// console.log(temp.celsius);

// var div,
//         container = document.getElementById('container')

// for ( var i = 0; i < 5; i++) {
//     div = document.createElement('div')
//     div.onclick = function() {
//         alert('This is box #' + i)
//     }
//     container.appendChild(div)
// }
// class Temperature {
//   constructor(celsius) {
//       this.celsius = celsius;
//   }
//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }
//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }
//   static fromFahrenheit(value) {
//     return new Temperature((value - 32) / 1.8);
//   }
// }

// let temp = new Temperature(22);
// console.log(temp.fahrenheit);

// temp.fahrenheit = 86;
// console.log(temp.celsius);


// Vector class 

// class Vec {
//     constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     }

// plus(other) {
//     return new Vec(this.x + other.x, this.y + other.y);
// }

// minus(other) {
//     return new Vec(this.x - other.x, this.y - other.y);
// }

// get length(){
//     return Math.sqrt(this.x * this.x + this.y + this.y);
//  }
// }

// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(5, 6).plus(new Vec(7, 8)));
// console.log(new Vec(9, 10).plus(new Vec(11, 12)));

// class Group

// class Group {
//     constructor() {
//         this.members = [];
//     }

//     add(value) {
//         if(!this.has(value)) {
//             this.members.push(value);
//         }
//     }

//     delete(value) {
//         this.members = this.members.filter(v => v !== value);
//     }

//     has(value){
//         return this.members.includes(value);
//     }

//     static from(collection) {
//         let group = new Group;
//         for (let value of collection) {
//             group.add(value);
//         }
//         return group;
//     }
//     [Symbol.iterator]() {
//     return new GroupIterator(this);
//     }
// }

// class GroupIterator {
//     constructor(group) {
//         this.group = group;
//         this.position = 0;
//     }

//     next() {
//         if (this.position >= this.group.members.length) {
//             return {done: true};
//         } else {
//             let result = {value: this.group.members[this.position],
//                          done: false};
//             this.position++;
//             return result;
//         }
//     }
// }

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }



// let group = Group.from([10, 20]);
// console.log(group.has(10));


// Iterable groups

// x = new Date(Date.UTC(2011, 3, 25))
// console.log(x.toUTCString());
// if  (Date.parse('1991-03-27T01:46:40Z') === Date.UTC((1959, 6, 19))){ 
//     console.log(true)
// } else {console.log(false)}

// function calcTax(state, income, dependents) {
//     if (state == 'NY') {
//         return income * 0.06 - dependents * 500;
//     } else if(state == 'NJ') {
//         return income * 0.05 - dependents * 300;
//     }
// }

// let tax = calcTax('NJ', 50000, 2);
// console.log(tax);


function Person(name){
    this.name = name;
}

Person.prototype.greet = function() {
    return "hi I am " + this.name;
}

let p1 = new Person('John');
let greeting = p1.greet();
// function Car(brand) {
//     this.brand = brand;
// }

// Car.prototype.getBrand = function() {
//     return this.brand;
// }

// let car = new Car('Ford');
// console.log(car.getBrand());

// var bmw = Car('BMW');
// console.log(bmw.getBrand);

// function add(a) {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(add(1, 2, 3, 4, 5));

// function compareBy(propertyName){
//     return function(a, b) {
//         if(a[propertyName] < b[propertyName]){
//             return -1;
//         }
//         if(a[propertyName] > b[propertyName]){
//             return 1;
//         }
//         return 0;
//     }
// }

// let products = [
//     { name: 'iPhone', price: 900 },
//     { name: 'Samsung Galaxy', price: 850 },
//     { name: 'Sony Xperia', price: 700 },
//   ];


  
//   // sort products by name
//   console.log('Products sorted by name:');
//   products.sort(compareBy('name'));
  
//   console.table(products);
  
//   // sort products by price
//   console.log('Products sorted by price:');
//   products.sort(compareBy('price'));
//   console.table(products);

// function convert(fn, length) {
//  let con = fn === 'CmToIn' ? length / 2.54 : fn === 'InToCm' ? length * 2.54 : 'Invalid';
//  return con;
// }

// console.log(convert('InToCm', 10));
// console.log(convert('CmToIn', 10));
// console.log(convert('nothing', 10));



