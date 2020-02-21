//EXERCICIO 6
/*  let numero = 0;
  let numeroDivisor = 0;
  for(let i = 1; i <= numero; i += 1) {
    if(numero % i === 0) {
      numeroDivisor += 1;
    }
  }
  console.log(numeroDivisor)
  if(numeroDivisor > 2) {
    console.log('numero não é primo')
  } else {
    console.log('numero é primo')
  } */
//EXERCICIO 4
/*  let n = 5;
  let asteriscos;
 for(let i = 1; i <= n; i += 2) {
    let stringVazia = '';
    for(let x = 1; x <= (n - i) / 2; x += 1 ) {
      stringVazia = stringVazia + ' '
    }
    for(let y = 1; y <= i; y += 1) {
      stringVazia = stringVazia + '*'
      console.log(stringVazia)
    }
  } */
//EXERCICIO 1
/* let n = 5;
  let linha = '';
  for(let i = 0; i < n; i += 1) {
    linha += '*'
  }
  for(let i = 0; i < n; i += 1){
    console.log(linha)
  } */
//EXERCICIO 2
/* let linha = '';
  let n = 5;
  for(let i = 0; i < n; i += 1) {
    linha += '*'
    console.log(linha)
  } */
//EXERCICIO 3
/* let linha = '';
  let n = 5;
  let space = '';
  for(let i = 1; i <= n; i += 1) {
    space = ''
    for(let j = n - i; j >= 0; j -= 1){
      space += ' ';
    }
    linha += '*'
    console.log(space + linha)
  }  */
