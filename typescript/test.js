var person2;
var isPerson = function (object) { return "address" in object; };
isPerson(person2) ? console.log(person2.address) : console.log("person2 is not a person");
