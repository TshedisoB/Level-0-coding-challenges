function maximum(...values){   //using spread operator to allow more values.
    let maxValue = values[0];
    for(let i=0 ; i < values.length ; i++){
        if(values[i] > maxValue){
            maxValue = values[i];
        }
    }
    return maxValue;
}
console.log(maximum(12,99,25,87));