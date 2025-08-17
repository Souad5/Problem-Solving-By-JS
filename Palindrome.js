function reverse(str){
    str=str.toLowerCase()
    let rev = str.split("").reverse().join("")
    return str === rev;
}

console.log(reverse("madam"))