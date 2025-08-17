function removeDup(arr){
   return arr.filter((a,i) => arr.indexOf(a)===i)
     
}

console.log(removeDup([1, 1, 2, 2, 3,3,4,4,5,5]));
