function hoursAndMinutes(num) {
  const hours = Math.floor(num / 60);
  const min = num % 60;
  let minStr = "minute";
  let hourStr = "hour";

  if (hours == 1) {
    hourStr;
  } else if (hours == 0 || hours > 0) {
    hourStr += "s";
  }
  if (min == 1) {
    minStr;
  } else if (min == 0 || min > 0) {
    minStr += "s";
  }
  console.log(`${hours} ${hourStr}, ${min} ${minStr}`);
}
hoursAndMinutes(0);
hoursAndMinutes(57);
hoursAndMinutes(60);
hoursAndMinutes(61);
hoursAndMinutes(120);
