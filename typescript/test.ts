type Person = {
    address: string;
}

let person2: any;
const isPerson = (object: any): object is Person => "address" in object;

isPerson(person2) ? console.log(person2.address) : console.log("person2 is not a person");