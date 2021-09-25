function areaOfTriangle(num1, num2, num3) {
  const semiPer = (num1 + num2 + num3) / 2;
  const area = Math.sqrt(
    semiPer * (semiPer - num1) * (semiPer - num2) * (semiPer - num3)
  );
  return area;
}
console.log(areaOfTriangle(4, 3, 5));
