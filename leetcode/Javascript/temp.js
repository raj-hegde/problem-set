const edge_condition = (a, b, cnt1) => (a === 0 && b === 0 ? ++cnt1 : 0);

const compare = function (arr, cnt2) {
  for (let i = 2; i <= arr.length - 3; i++) {
    if (arr[i - 1] === 0 && arr[i] === 0 && arr[i + 1] === 0) {
      arr[i] = 1;
      cnt2 += 1;
    }
  }
  return cnt2;
};

const flowerbed = [1, 0, 0, 0, 0, 1];
const n = 2;

const canPlaceFlowers = function () {
  let cnt = 0;
  let cnt1 = 0;
  let cnt2 = 0;
  cnt1 += edge_condition(flowerbed[0], flowerbed[1], cnt);
  cnt1 += edge_condition(
    flowerbed[flowerbed.length - 1],
    flowerbed[flowerbed.length - 2],
    cnt
  );
  cnt2 += compare(flowerbed, cnt);
  cnt = cnt1 + cnt2;
  if (cnt === n) {
    return true;
  } else {
    return false;
  }
};

console.log(canPlaceFlowers());
