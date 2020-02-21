function retornaLucro(custo, venda) {
  return custo <= 0 || venda <= 0
    ? "error"
    : Math.abs((((venda - custo) * 1000) / 100) * 80);
}

console.log(retornaLucro(10, 20.2));
console.log(retornaLucro(0, 20));
