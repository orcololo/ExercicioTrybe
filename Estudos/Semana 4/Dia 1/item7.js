function retornaNota(i) {
  if (i >= 90) {
    return "A";
  }
  if (i >= 80 && i < 90) {
    return "B";
  }
  if (i >= 70 && i < 80) {
    return "C";
  }
  if (i >= 60 && i < 70) {
    return "D";
  }
  if (i >= 50 && i < 60) {
    return "E";
  }
  if (i < 50) {
    return "F";
  } else {
    return "Invalid Number";
  }
}

console.log(retornaNota(91));
console.log(retornaNota(82));
console.log(retornaNota(72));
console.log(retornaNota(62));
console.log(retornaNota(52));
console.log(retornaNota(42));
console.log(retornaNota(32));
