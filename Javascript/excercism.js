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

// function chooseVehicle(option1, option2) {
//     if (option1 < option2) {
//         return option1;
//     } else { return option2 }
// }
  
// //     if (temp === -1) {
// //       return option1;
// //     } else if (temp === 1) {
// //       return option2;
// //     }
// //   }

// option1 = 'Volkswagen Beetle';
// option2 =  'Volkswagen Golf';

//console.log(chooseVehicle(option1, option2));

// function birdsInWeek(birdsPerDay, week) {

//     let sum = 0;

//     if (birdsPerDay.length % 7 !== 0) {
//         throw console.error("Not a valid week");
//     } else {
//         let index = (week * 7) - 7;
//         for (let i = index; i < index + 7; i++) {
//             sum += birdsPerDay[i];
//         }
//     }
//     return sum;
// }


// birdsPerDay = [4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3];
// //console.log(birdsPerDay.length)
// week = 2;

// console.log(birdsInWeek(birdsPerDay, week));


// function fixBirdCountLog(birdsPerDay) {
//   for (let index = 0; index < birdsPerDay.length; index += 2) {
//     birdsPerDay[index]++;
//   }
//   return birdsPerDay;
// }

// const birdsPerDay = [3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0];
// console.log(fixBirdCountLog(birdsPerDay));

function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

// console.log(timeToMixJuice('Green Garden'));


// function limesToCut(wedgesNeeded, limes) {
//   let wedges = 0;
//   let i = 0;
// if (wedgesNeeded){
//   while (wedges <= wedgesNeeded && limes.length > 0) {
//     switch (limes[0]) {
//       case 'small':
//         wedges += 6;
//         break;
//       case 'medium':
//         wedges += 8;
//         break;
//       case 'large':
//         wedges += 10;
//         break;
//     }
//     limes.shift();
//     i++;
//   }
//   return i;
//  }
//  return 0;
// }

// console.log(limesToCut(10, ['small', 'large', 'medium']));

/**
 * Calculates the remaining orders that can be processed within the given time limit.
 * @param {number} timeLeft - The time left to process orders.
 * @param {Array} orders - The list of orders to process.
 * @returns {Array} - The remaining orders that can be processed within the given time limit.
 */
function remainingOrders(timeLeft, orders) {
  let temp = timeLeft;

  // Loop through the orders until the time limit is reached or there are no more orders
  do {
    temp -= timeToMixJuice(orders[0]);
    orders.shift();
  } while(temp > 0 && orders.length > 0);

  return orders;
}


