function hoursAndMinutes(num) {
  let hours = Math.floor(num / 60);
  let min = num % 60;

  if(hours == 1 && min == 1) {
    return `${hours} hour, ${min} minute`;
  } else if (hours == 1 && min > 1) {
    return `${hours} hour, ${min} minutes`;
  } else if (hours > 1 && min == 1) {
    return `${hours} hours, ${min} minute`;
  } else {
    return `${hours} hours, ${min} minutes`;
  }
}
console.log(hoursAndMinutes(121));
console.log(hoursAndMinutes(63));