//split the number
function digDiv(n) {
    let h = n % 100;
    let j = Math.floor(n / 100);
    return [j, h];
}
function karatsuba(x, y) {
    const [a, b] = digDiv(x);
    const [c, d] = digDiv(y);
    const n = Math.ceil(Math.log10(x)); // length of either x or y
    if (n === 1) {
        return x * y;
    }
    else {
        var ac = a * c;
        var bd = b * d;
        let p = a + b;
        let q = c + d;
        let pq = p * q;
        var adbc = pq - ac - bd;
    }
    const ans = (Math.pow(10, n) * ac) + ((Math.pow(10, (n / 2))) * adbc) + bd;
    return ans;
}
console.log(karatsuba(1, 7));
//# sourceMappingURL=karatsuba.js.map

