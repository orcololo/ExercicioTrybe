function retornaValor(a) {
  let num = a;
  console.log(typeof num, num);
  if (num == 0) {
    return "zero";
  }
  if (num < 0) {
    return "negative";
  }
  if (num > 0) {
    return "positive";
  }
}

console.log(retornaValor(-10));
console.log(retornaValor(10));
console.log(retornaValor(0));
