function vowels(str){
    const word = "aeiouAEIOU";
    let count = 0

    for(const s of str){
        if(word.includes(s)){
            count++
        }
    }
    return count;
}
console.log(vowels("Madam"))