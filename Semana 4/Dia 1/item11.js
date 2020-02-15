function salarioLiquido(bruto) {
  if (bruto < 1556.94) {
    return (bruto / 100) * 92;
  }
  if (bruto > 1556.95 && bruto < 2594.92) {
    let brutoInss = (bruto / 100) * 91;
    console.log(brutoInss);
    let ir = Math.abs((brutoInss / 100) * 7.5 - 142.8);
    return Math.abs(brutoInss - ir);
  }
  if (bruto > 2594.93 && bruto < 5189.32) {
    let brutoInss = (bruto / 100) * 89;
    let ir = Math.abs((brutoInss / 100) * 15 - 142.8);
    return Math.abs(brutoInss - ir);
  }

  if (bruto > 5189.82) {
  }
}

console.log(salarioLiquido(1557.1));
