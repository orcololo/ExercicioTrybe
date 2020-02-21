function retornaTresPar(a, b, c) {
  numbers = [a, b, c];
  let result = 0;
  numbers.forEach(element => {
    element % 2 == 0 ? result++ : result;
  });
  return result == 1 ? true : false;
}

console.log(retornaTresPar(3, 3, 4));
