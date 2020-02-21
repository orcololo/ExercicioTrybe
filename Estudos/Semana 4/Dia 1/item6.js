function retornaMovimentoPeca(i) {
  let res = i.toLowerCase();
  if (res == "bishop") {
    return "diagonal";
  }
  if (res == "pawn") {
    return "foward, forward diagonally";
  }
  if (res == "queen") {
    return "rank, files and diagonals";
  }
  if (res == "rook") {
    return "up and down, side to side";
  }
  if (res == "king") {
    return "one square, any direction";
  }
  if (res == "knight") {
    return "L shape.";
  } else {
    return "piece not found.";
  }
}

console.log(retornaMovimentoPeca("queeq"));
