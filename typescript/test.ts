type Person = {
    address: string;
}

let person2: any;
const isPerson = (object: any): object is Person => "address" in object;
