var removeElement = function(nums, val){
  const newArr = nums.filter(i => i !== val);
  return newArr;
};
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
