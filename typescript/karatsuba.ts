//split the number
function digDiv(n: number) {
  let h: number = n % 100;
  let j: number = Math.floor(n / 100);

  return [j, h];
}

function karatsuba(x: number, y: number) {
  const [a, b] = digDiv(x);
  const [c, d] = digDiv(y);

  const n: number = Math.ceil(Math.log10(x)); // length of either x or y
  
  if (n === 1) {
    return x * y;
  }
  else {
    var ac: number = a * c;
    var bd: number = b * d;
    let p: number = a + b;
    let q: number = c + d;
    let pq: number = p * q;
    var adbc: number = pq - ac - bd;
  }

  const ans: number = (Math.pow(10, n) * ac) + ((Math.pow(10, (n / 2))) * adbc) + bd;
  return ans;
}


console.log(karatsuba(1, 7));

