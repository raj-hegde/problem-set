//split the number
function digDiv(n: number) {
  let h: number = n % 100;
  let j: number = Math.floor(n / 100);

  return [j, h];
}

function karatsuba(x: number, y: number) {
  const [a, b] = digDiv(x);
  const [c, d] = digDiv(y);

  console.log(a, b, c, d);
}

karatsuba(8787, 9825);
