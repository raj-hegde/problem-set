var isPalindrome = function (x){
    let isReversed = function (){
        var revNum = 0;
        while (x > 0) {

            revNum = revNum * 10 + x % 10;
            x = Math.floor(x / 10);
        }
        return revNum;
    }
    return (x === isReversed());
}
console.log((isPalindrome(121)));
