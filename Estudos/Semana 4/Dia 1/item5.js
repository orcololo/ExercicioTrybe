function anguloTriangulo(a, b, c) {
  return a + b + c == 180 ? true : false;
}

console.log(anguloTriangulo(60, 60, 60));
console.log(anguloTriangulo(60, 60, 59));
