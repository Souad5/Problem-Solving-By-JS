function factorial(number) {
  let result = 1;
  for (i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(6));
