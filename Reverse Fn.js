function reverse(str){
    let rev =  str.split("").reverse().join("")
    return rev;
}

console.log(reverse("Hello World"))