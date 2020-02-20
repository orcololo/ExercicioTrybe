function makeWhiteSpaces(times) {
  let str = "";
  while (times > 0) {
    times--;
    str = str + " ";
  }
  return str;
}

function makeAsteriks(times) {
  asterisk = "";
  for (let i = 0; i < times; i++) {
    asterisk = asterisk + "*";
  }
  return asterisk;
}

let x = 6;
for (let i = 0; i < 5 + 1; i++) {
  x--;
  console.log(makeWhiteSpaces(x), makeAsteriks(i));
}
