var fields = ["name", "age", "address"];
var info = {
  name: "John Doe",
  age: "",
  phone: "123-456-7890",
};

function validator(obj, field) {
  let i = 0;
  let invalid_field = [];
  while(i < field.length) {
    if (field[i] in obj) {
        switch(obj[field[i]]) {
            case '' :
                invalid_field.push(field[i]);
                break;
            case null : 
                
        }
    }
  }
  }


validator(info, fields);