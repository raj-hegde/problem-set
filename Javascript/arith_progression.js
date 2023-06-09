var canMakeArithmeticProgression = function(arr) {
  let temp = arr.sort(function(a, b){return(b-a)});
 //temp = temp.reverse();
  let diff = temp[0] - temp[1];
   let i = 0;
   while (i < temp.length - 1){
    if ((temp[i] - temp[i+1]) !== diff){
      return false;
    };
    i++;
   };
   return true;
};

arr = [-68,-96,-12,-40,16];
console.log(canMakeArithmeticProgression(arr));
