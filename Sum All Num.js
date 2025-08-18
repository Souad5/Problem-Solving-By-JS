function allNumbers(num){
    let total = 0;
    for(const n of num){
        total = total + n
    }
    return total;
}

console.log(allNumbers([1,2,3,4]))