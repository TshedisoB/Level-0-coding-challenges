function areaOfTriangle(num1, num2, num3) {
  const semiPerimeter = (num1 + num2 + num3) / 2;
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - num1) *
      (semiPerimeter - num2) *
      (semiPerimeter - num3)
  );
  return area;
}
areaOfTriangle(4, 3, 5);
