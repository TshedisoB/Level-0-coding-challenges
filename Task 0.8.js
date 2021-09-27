function hoursAndMinutes(num) {
  const hours = Math.floor(num / 60);
  const min = num % 60;

  if (hours == 0 && min == 0) {
    console.log(`${hours} hours, ${min} minutes`);
  } else if (hours == 1 && min == 1) {
    console.log(`${hours} hour, ${min} minute`);
  } else if (hours == 1 && min == 0) {
    console.log(`${hours} hour, ${min} minutes`);
  } else if (hours == 1 && min > 1) {
    console.log(`${hours} hour, ${min} minutes`);
  } else if (hours < 1 && min > 1) {
    console.log(`${hours} hours, ${min} minutes`);
  } else if (hours > 1 && min > 1) {
    console.log(`${hours} hours, ${min} minutes`);
  } else if (hours > 1 && min == 1) {
    console.log(`${hours} hours, ${min} minute`);
  } else if (hours > 1 && min == 0) {
    console.log(`${hours} hours, ${min} minutes`);
  } else if (hours > 1 && min > 1) {
    console.log(`${hours} hours, ${min} minutes`);
  }
}
hoursAndMinutes(0);
hoursAndMinutes(57);
hoursAndMinutes(60);
hoursAndMinutes(66);
hoursAndMinutes(120);
