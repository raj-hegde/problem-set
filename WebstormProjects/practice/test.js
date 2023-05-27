const lengthOfLastWord = function (s){
    const arr = s.split(" ");
    console.log(arr[arr.length - 1].length);
}

lengthOfLastWord(("Hello world"));