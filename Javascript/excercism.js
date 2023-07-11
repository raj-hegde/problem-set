// function backDoorResponse(line) {
//   for (let i = line.length - 1; i !== 0 ; i--) {
//     if (line[i] !== ' ') {
//       return line[i];
//       break;
//     }
//  }

// }

// const SHIRE_HORSE_WITH_SPACES = [
//       'Stands so high   ',
//       '\tHuge hooves too\t',
//       'Impatiently waits for \t \t',
//       '    Reins and harness    ',
//       'Eager to leave\n\n',
//     ];

// console.log(backDoorResponse(SHIRE_HORSE_WITH_SPACES));

function chooseVehicle(option1, option2) {
  return option1.localeCompare(option2);
}

let option1 = 'Volkswagen Beetle'; 
let option2 = 'Volkswagen Golf';
let temp = chooseVehicle(option1, option2);
console.log(temp);
if (temp < 0){
  console.log(option1);
} else {
  console.log(option2);
}

