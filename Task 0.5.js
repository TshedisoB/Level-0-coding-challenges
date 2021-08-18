function areaOfTriangle(num1,num2,num3){
    let semiPerimeter = (num1 + num2 + num3)/2;
    let sp = semiPerimeter;
    let area = Math.sqrt(sp*(sp-num1)*(sp-num2)*(sp-num3));
    return area;
}
console.log(areaOfTriangle(4,3,5));