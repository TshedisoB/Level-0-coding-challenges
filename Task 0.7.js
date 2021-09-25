function celsiusToFahrenheit(num) {
  const celDegree = num * 1.8 + 32;
  return celDegree;
}
console.log(celsiusToFahrenheit(5));

function fahrenheitToCelsius(num) {
  const fahDegree = ((num - 32) * 5) / 9;
  return fahDegree;
}
console.log(fahrenheitToCelsius(41));
