function hoursAndMinutes(num) {
  let hours = Math.floor(num / 60);
  let min = num % 60;

  if(hours == 0 && min == 0) {
    return `${hours} hours, ${min} minutes`;
  }if(hours == 1 && min == 1) {
    return `${hours} hour, ${min} minute`;
  }if(hours == 1 && min == 0) {
    return `${hours} hour, ${min} minutes`;
  } else if (hours == 1 && min > 1) {
    return `${hours} hour, ${min} minutes`;
  } else if (hours > 1 && min == 1) {
    return `${hours} hours, ${min} minute`;
  } else
    return `${hours} hours, ${min} minutes`;
}

console.log(hoursAndMinutes(0));
console.log(hoursAndMinutes(60));
console.log(hoursAndMinutes(61));
console.log(hoursAndMinutes(63));
console.log(hoursAndMinutes(123));
