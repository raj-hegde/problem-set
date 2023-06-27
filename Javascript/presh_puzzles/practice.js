function ngon (ants){
    return (1 / Math.pow(2, ants-1))
}

let ants = prompt("Enter the number of ants: ");
console.log("The probability that the ants will never collide is: ", ngon(ants));


