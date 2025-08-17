function removeDup(arr){
   return arr.filter((a,i) => arr.indexOf(a)===i)
     
}

console.log(removeDup([1, 1, 2, 2, 5, 5, 6, 6, 7]));
