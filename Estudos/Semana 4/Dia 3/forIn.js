var car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

for (let i in car) {
  console.log(i, car[i]);
}
console.log("Item 1 -------------------");
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald"
};
console.log("Bem-vinda, " + info.personagem);
console.log("Item 2 -------------------");
info["recorrente"] = "Sim";
console.log(info);
console.log("Item 3 ------------------");
for (let i in info) {
  console.log(i);
}
console.log("Item 4 ------------------");
for (const i in info) {
  console.log(info[i]);
}
console.log("Item 5 -----------------");

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics#178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
};

for (const i in (info, info2)) {
  if (info[i] == info2[i]) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[i] + " e " + info2[i]);
  }
}
