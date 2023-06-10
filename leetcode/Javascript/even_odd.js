function evenOdd(n){
    if (n === 0 ) return true
    else if (n === 1) return false
    else if (n < 0) return evenOdd(-n)
    else return evenOdd(n-2);
}

console.log(evenOdd(-2));