function calcInss(x) {
  if (x > 0 && x < 1556.95) {
    x -= x * 0.08;
    return x;
  } else if (x >= 1556.95 && x < 2594.93) {
    x -= x * 0.09;
    return x;
  } else if (x >= 2594.93 && x < 5189.83) {
    x -= x * 0.11;
    return x;
  } else if (x >= 5189.83) {
    x -= 570.88;
    return x;
  } else {
    console.log("error");
  }
}

function calcIr(x) {
  if (x > 1903.98 && x < 2826.66) {
    x -= x * 0.075 - 142.8;
    return x;
  } else if (x > 2826.66 && x < 3751.06) {
    x -= x * 0.15 - 354.8;
    return x;
  } else if (x > 3751.05 && x < 4664.69) {
    x -= x * 0.225 - 636.13;
    return x;
  } else if (x > 4664.68) {
    x -= x * 0.275 - 869.36;
    return x;
  }
}

function calcSalario(bruto) {
  inss = calcInss(bruto);
  ir = calcIr(inss);
  return ir;
}

console.log(calcSalario(3000));
