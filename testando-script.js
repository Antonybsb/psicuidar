const tmbHomem = 88.36;
function resultadoFormulaH(peso, alturaCm, idade) {
  const pesoCalculado = peso * 13.4;
  const alturaCalculada = alturaCm * 4.8;
  const idadeCalculada = idade * 5.7;

  const resultado = tmbHomem + pesoCalculado + alturaCalculada - idadeCalculada;
  return resultado;
}
console.log(
  "O resultado da soma para homem é",
  resultadoFormulaH(100, 186, 40)
);

const tmbMulher = 447.6;
function resultadoFormulaM(peso, alturaCm, idade) {
  const pesoCalculado = peso * 9.2;
  const alturaCalculada = alturaCm * 3.1;
  const idadeCalculada = idade * 4.3;

  const resultado = tmbHomem + pesoCalculado + alturaCalculada - idadeCalculada;
  return resultado;
}
console.log(
  "O resultado da soma para mulher é",
  resultadoFormulaM(64, 172, 40)
);
