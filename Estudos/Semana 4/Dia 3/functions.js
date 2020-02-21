//Item 1
//Crie uma função que recebe uma string e retorna true se é um palíndromo ou false se não for.
//Exemplo de palíndromo: arara.
//verificaPalindrome("arara");
//Retorno esperado: true
//verificaPalindrome("desenvolvimento");
//Retorno esperado: false

function verificaPalindrome(arara) {
  let reverso = arara
    .split("")
    .reverse()
    .join("");
  if (arara == reverso) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("ana"));
console.log(verificaPalindrome("abacaxi"));
console.log(verificaPalindrome("ele"));

//Crie uma função que recebe um array de inteiros e retorna o índice do maior valor.

function retornaMaiorValor(arr) {
  let max = Math.max(...arr);
  return arr.indexOf(max);
}

console.log(
  retornaMaiorValor([12, 52, 5285, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22])
);

//Crie uma função que recebe um array de inteiros e retorna o índice do menor valor.

function retornaMenorvalor(arr) {
  let min = Math.min(...arr);
  return arr.indexOf(min);
}

console.log(retornaMenorvalor([1, 2, 3, 4, 5, -1, 2, -4]));

//Crie uma função que recebe um array de nomes e retorna o nome com a maior quantidade de caracteres.

function retornaMaiorNome(arr) {}
