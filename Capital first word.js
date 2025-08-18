function capital(sen){
    let str = sen.split(" ")
    for(i = 0; i < str.length ; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1)
    }
    return str.join(" ")
}

console.log(capital("souad al kabir "))