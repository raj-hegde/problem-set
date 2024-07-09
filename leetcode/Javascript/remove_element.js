//problem encountered: By using splice, array mutates in place while in the
//middle of operation and from there on an element might be missed

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const removeElement = function (nums, val) {
  let cnt = 0;
  nums.forEach((element) => {
    if (element !== val) {
      nums[cnt] = element;
      cnt++;
    }
  });
  return cnt;
};
console.log(removeElement(nums, val));
