var removeElement = function(nums, val){
//let cnt = 0;
    for (let i = 0; i < nums.length; i++){
     if (val === nums[i]) {
         nums.splice(i, 1);
         i--;
     }
    }
    return nums;
};
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
