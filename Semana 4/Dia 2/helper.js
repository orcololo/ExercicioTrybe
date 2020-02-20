module.exports = function makeAString(str, times) {
  arr = [];
  for (let i = 0; i < times + 1; i++) {
    arr.push(str);
  }
  return arr.join("");
};
