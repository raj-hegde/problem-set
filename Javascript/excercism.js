// function backDoorResponse(line) {
//   for (let i = line.length - 1; i !== 0 ; i--) {
//     if (line.charAt(i).match(/[a-z]/)) {
//       return line[i];
//       break;
//     }
//  }

// }

// const SHIRE_HORSE_WITH_SPACES = [
//       // 'Stands so high   ',
//       // '\tHuge hooves too\t',
//       // 'Impatiently waits for \t \t',
//       // '    Reins and harness    ',
//       // 'Eager to leave\n\n',
//     ];

// console.log(backDoorResponse(' Eager to leave\n\n'));

// function dayRate(ratePerHour) {
//   return ratePerHour * 8;
// }

// function daysInBudget(budget, ratePerHour) {
//   return Math.floor(budget / dayRate(ratePerHour));
// }

// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//   let totalFullMonthDays = numDays - (numDays % 22);
//   let totalRate = ((numDays * dayRate(ratePerHour)) - (totalFullMonthDays * dayRate(ratePerHour) * discount));
//   return Math.ceil(totalRate);
// }

// console.log(priceWithMonthlyDiscount(89, 230, 0.42));

// code was improved later with implicit returns not literals like true or false


// function canFreePrisoner(
//   knightIsAwake,
//   archerIsAwake,
//   prisonerIsAwake,
//   petDogIsPresent
// ) {


//   if (petDogIsPresent && !archerIsAwake) { 
//       return true;
//   } else if (prisonerIsAwake && !archerIsAwake && !knightIsAwake) {
//         return true;
//   } else { return false }
// }

// const knightIsAwake = false;
// const archerIsAwake = true; 
// const prisonerIsAwake = false;
// const petDogIsPresent = true;

// temp = canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);

// console.log(temp);




