function backDoorResponse(line) {
  for (let i = line.length - 1; i !== 0 ; i--) {
    if (line[i] !== ' ') {
      return line[i];
      break;
    }
 }

}

const SHIRE_HORSE_WITH_SPACES = [
      'Stands so high   ',
      '\tHuge hooves too\t',
      'Impatiently waits for \t \t',
      '    Reins and harness    ',
      'Eager to leave\n\n',
    ];

console.log(backDoorResponse(SHIRE_HORSE_WITH_SPACES));


