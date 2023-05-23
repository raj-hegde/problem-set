// let {name} = {name: "Faraji", age: 23}; // how to access age
// console.log();


function range(start, end, step = start < end ? 1 : -1 ){
  let ans = [];
  for (i = 0; i <= end; i++){
   ans.push(i);
  }
  return ans;
}
console.log(range(1, 10, 2));

function sum(total){
  let ans = 0;
  for (let tot of total){
   ans += tot;
  }
  return ans;
}

