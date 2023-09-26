//split the number
function digDiv(n) {
    let h = n % 100;
    let j = Math.floor(n / 100);
    return [j, h];
}
function karatsuba(x, y) {
    const [a, b] = digDiv(x);
    const [c, d] = digDiv(y);
    console.log(a, b, c, d);
}
karatsuba(8787, 9825);
//# sourceMappingURL=karatsuba.js.map