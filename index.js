/**** Escreva o código abaixo 👇******/

// Questão 1: Soma simples----------------------------------------------------------------
function somar(a, b) {
  return a + b;
}

// Questão 2: Multiplicação simples----------------------------------------------------------------
function multiplicar(a, b) {
  return a * b;
}

// Questão 3: Subtração simples----------------------------------------------------------------
function subtrair(a, b) {
  return a - b;
}

// Questão 4: Divisão com verificação de zero----------------------------------------------------------------
function dividir(a, b) {
  if (b === 0) {
    return "Erro: divisão por zero";
  } else {
    return a / b;
  }
}

// Questão 5: Calculadora de média----------------------------------------------------------------
function calcularMedia(nota1, nota2, nota3, nota4) {
  const somaDasNotas = nota1 + nota2 + nota3 + nota4;

  return dividir(somaDasNotas, 4); 
}

// Questão 6: Exponenciação----------------------------------------------------------------
function elevarPotencia(base, expoente) {

  return Math.pow(base, expoente);
}

// Questão 7: Área de um retângulo----------------------------------------------------------------
function calcularAreaRetangulo(largura, altura) {

  return multiplicar(largura, altura);
}

// Questão 8: Par ou ímpar----------------------------------------------------------------
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

// Questão 9: Raiz Quadrada----------------------------------------------------------------
function calcularRaizQuadrada(numero) {

  return Math.sqrt(numero);
}

// Questão 10: Cálculo de Hipotenusa----------------------------------------------------------------
function calcularHipotenusa(cateto1, cateto2) {

  const somaDosQuadrados = somar(
    elevarPotencia(cateto1, 2),
    elevarPotencia(cateto2, 2)
  );

  const hipotenusa = calcularRaizQuadrada(somaDosQuadrados);
  
  return hipotenusa;
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
