function evenNum(num){
    for(const n of num){
        if(n % 2 === 0){
            console.log("Even Numbers in an Array " + n)
        }
        
    }
}

evenNum([1,2,3,4,6,5,22])