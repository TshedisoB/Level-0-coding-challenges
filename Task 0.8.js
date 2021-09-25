function hoursAndMinutes(num) {
  const hours = Math.floor(num / 60);
  const min = num % 60;

  if (hours == 0 && min == 0) {
    console.log(`${hours} hours, ${min} minutes`);
  }
  if (hours == 1 && min == 1) {
    console.log(`${hours} hour, ${min} minute`);
  }
  if (hours == 1 && min == 0) {
    console.log(`${hours} hour, ${min} minutes`);
  } else if (hours == 1 && min > 1) {
    console.log(`${hours} hour, ${min} minutes`);
  } else if (hours > 1 && min == 1) {
    console.log(`${hours} hours, ${min} minute`);
  } else if (hours > 1 && min > 1) {
    console.log(`${hours} hours, ${min} minutes`);
  }
}
hoursAndMinutes(0);
hoursAndMinutes(60);
hoursAndMinutes(61);
hoursAndMinutes(63);
hoursAndMinutes(123);
