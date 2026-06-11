// Lista de Exercícios - Estruturas Condicionais

//  1. Maior entre dois números
// Faça um programa que peça dois números e imprima o maior deles.

// > Dica: para realizar a inserção de dados pelo usuário utilize a função `input("texto para o usuario")`.

let num1 = 10;
let num2 = 20;
if (num1 > num2) {
    console.log("O maior número é: ", num1);
} else if (num2 > num1) {
    console.log("O maior número é: ", num2);
} else {
    console.log("Os números são iguais.");
}


//  2. Número positivo ou negativo
// Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

let numero = -8
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//  3. Identificação de sexo
// Faça um programa que verifique se uma letra digitada é **"F"** ou **"M"**.

// Conforme a letra digitada, exiba:

// - F → Feminino
// - M → Masculino
// - Qualquer outra letra → Sexo inválido

let sexo = "F";
if (sexo === "F") {
    console.log("Feminino");
} else if (sexo === "M") {
    console.log("Masculino");
} else {
    console.log ("Sexo inválido");
}


//  4. Vogal ou consoante
// Faça um programa que verifique se uma letra digitada é vogal ou consoante.

let letra = "A";
if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
    console.log("Vogal");
} else {
    console.log("Consoante");
}

//  5. Média de notas
// Faça um programa para a leitura de duas notas parciais de um aluno.

// Exiba:

// - **Aprovado**, se a média for maior ou igual a 7;
// - **Aprovado com Distinção**, se a média for igual a 10;
// - **Reprovado**, se a média for menor que 7.

let nota1 = 9.5;
let nota2 = 5.7;
let media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log("Aprovado");
} else if (media === 10) {
    console.log("Aprovado com Distinção");
} else {
    console.log("Reprovado");
}

//  6. Maior de três números
// Faça um programa que leia três números e mostre o maior deles.

let n1 = 15;
let n2 = 25;
let n3 = 10;
let maior = n1;
if (n2 > maior) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}
console.log("O maior número é: ", maior);

//  7. Maior e menor de três números
// Faça um programa que leia três números e mostre o maior e o menor deles.

const a = 30
const b = 20
const c = 10
let maiorNum = a;
let menorNum = a;
if (b > maiorNum) {
    maiorNum = b;
}
if (c > maiorNum) {
    maiorNum = c;
}
if (b < menorNum) {
    menorNum = b;
}
if (c < menorNum) {
    menorNum = c;
}
console.log("O maior número é: ", maiorNum);
console.log("O menor número é: ", menorNum);

//  8. Produto mais barato
// Faça um programa que pergunte o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é sempre pelo mais barato.

const preco1 = 50
const preco2 = 30
const preco3 = 20

let maisBarato = preco1;
let produtoMaisBarato = 1;

if (preco2 < maisBarato) {
    maisBarato = preco2;
    produtoMaisBarato = 2;
}
if (preco3 < maisBarato) {
    maisBarato = preco3;
    produtoMaisBarato = 3;
}
console.log("O produto mais barato é o produto ", produtoMaisBarato, " com preço R$ ", maisBarato);


//  9. Ordem decrescente
// Faça um programa que leia três números e mostre-os em ordem decrescente.

const numA = 15
const numB = 25
const numC = 10

let maiornum = numA, meionum = numB, menornum = numC;

// Verificar o maior número
if (numB > maiornum) {
    maiornum = numB;
    meionum = numA;
    menornum = numC;
}
if (numC > maiornum) {
    maiornum = numC;
    meionum = numA;
    menornum = numB;
}

// Verificar o menor número
if (numB < menornum) {
    menornum = numB;
    meionum = numA;
}
if (numC < menornum) {
    menornum = numC;
    meionum = numA;
}

console.log("Números em ordem decrescente: ", maiornum, meionum, menornum);

//  10. Turno de estudo
// Faça um programa que pergunte em que turno você estuda.
// Digite: - M → Matutino - V → Vespertino - N → Noturno
// Exiba: - "Bom dia!" - "Boa tarde!" - "Boa noite!" - "Valor inválido"

const turno = input("digite o turno de estudo: M, V ou N");

if (turno === "M") {
    console.log("Bom dia!");
} else if (turno === "V") {
    console.log("Boa tarde!");
} else if (turno === "N") {
    console.log("Boa noite!");
} else {
    console.log("Valor inválido");
}

// 11. Reajuste salarial
// As organizações CSM resolveram dar um aumento de salário aos seus colaboradores.

// Faça um programa que receba o salário de um colaborador e calcule o reajuste conforme a tabela:

// | Faixa Salarial | Percentual |
// |---------------|------------|
// | Até R$ 280,00 | 20% |
// | De R$ 280,01 até R$ 700,00 | 15% |
// | De R$ 700,01 até R$ 1.500,00 | 10% |
// | Acima de R$ 1.500,00 | 5% |

// Após o reajuste, informe:

// - Salário antes do reajuste;
// - Percentual aplicado;
// - Valor do aumento;
// - Novo salário.

const salario = Number(input("Digite o salário do colaborador: R$ "));
let percentual, valorAumento, novoSalario;

if (salario <= 280) {
    percentual = 20;
} else if (salario <= 700) {
    percentual = 15;
} else if (salario <= 1500) {
    percentual = 10;
} else {
    percentual = 5;
}
valorAumento = salario * (percentual / 100);
novoSalario = salario + valorAumento;
console.log("Salário antes do reajuste: R$ ", salario.toFixed(2));
console.log("Percentual aplicado: ", percentual, "%");
console.log("Valor do aumento: R$ ", valorAumento.toFixed(2));
console.log("Novo salário: R$ ", novoSalario.toFixed(2));

// 12. Folha de pagamento
// Faça um programa para cálculo de folha de pagamento.
// O programa deverá pedir:
// - Valor da hora trabalhada;
// - Quantidade de horas trabalhadas no mês.

// Desconto do IR
// | Salário Bruto | IR |
// |--------------|----|
// | Até R$ 900,00 | Isento |
// | Até R$ 1.500,00 | 5% |
// | Até R$ 2.500,00 | 10% |
// | Acima de R$ 2.500,00 | 20% |

// Considere:
// - INSS: 10%
// - Sindicato: 3%
// - FGTS: 11% (não é descontado)

// Exemplo de saída:
// ```text
// Salário Bruto (5 * 220)     : R$ 1100,00
// (-) IR (5%)                : R$   55,00
// (-) INSS (10%)             : R$  110,00
// FGTS (11%)                 : R$  121,00
// Total de descontos         : R$  165,00
// Salário Líquido            : R$  935,00
// ```

const valorHora = Number(prompt("Digite o valor da hora trabalhada: R$ "));
const horasTrabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas no mês: "));
const salarioBruto = valorHora * horasTrabalhadas;
const ir = salarioBruto * 0.11;
const inss = salarioBruto * 0.10;
const sindicato = salarioBruto * 0.03;
const fgts = salarioBruto * 0.11;
const totalDescontos = ir + inss + sindicato;
const salarioLiquido = salarioBruto - totalDescontos;

console.log('salário bruto: R$ ', salarioBruto.toFixed(2));
console.log('(-) IR (11%): R$ ', ir.toFixed(2));
console.log('(-) INSS (10%): R$ ', inss.toFixed(2));
console.log('(-) Sindicato (3%): R$ ', sindicato.toFixed(2));
console.log('FGTS (11%): R$ ', fgts.toFixed(2));
console.log('Total de descontos: R$ ', totalDescontos.toFixed(2));
console.log('Salário Líquido: R$ ', salarioLiquido.toFixed(2));

// 13. Dia da semana
// Leia um número (1 a 7) e exiba o dia da semana correspondente ou "Valor inválido".
// SOLUÇÃO:
const diaSemana = Number(input("Digite um número de 1 a 7: "));

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Valor inválido");
}

// 14. Conceito por média
// Leia duas notas, calcule a média e exiba o conceito (A a E) e a situação (Aprovado ou Reprovado).
// SOLUÇÃO:
const notaE1 = Number(input("Digite a primeira nota: "));
const notaE2 = Number(input("Digite a segunda nota: "));
const mediaE = (notaE1 + notaE2) / 2;
let conceito, situacao;

if (mediaE >= 9 && mediaE <= 10) {
  conceito = "A";
  situacao = "Aprovado";
} else if (mediaE >= 7.5 && mediaE < 9) {
  conceito = "B";
  situacao = "Aprovado";
} else if (mediaE >= 6 && mediaE < 7.5) {
  conceito = "C";
  situacao = "Aprovado";
} else if (mediaE >= 4 && mediaE < 6) {
  conceito = "D";
  situacao = "Reprovado";
} else if (mediaE >= 0 && mediaE < 4) {
  conceito = "E";
  situacao = "Reprovado";
} else {
  conceito = "Inválido";
  situacao = "Inválido";
}

console.log(`Média: ${mediaE.toFixed(1)}`);
console.log(`Conceito: ${conceito}`);
console.log(`Situação: ${situacao}`);

// 15. Tipos de triângulo
// Peça três lados, verifique se formam um triângulo e classifique em Equilátero, Isósceles ou Escaleno.
// SOLUÇÃO:
const ladoA = Number(input("Digite o primeiro lado: "));
const ladoB = Number(input("Digite o segundo lado: "));
const ladoC = Number(input("Digite o terceiro lado: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triângulo Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Triângulo Isósceles");
  } else {
    console.log("Triângulo Escaleno");
  }
} else {
  console.log("Não é um triângulo válido");
}

// 16. Equação do segundo grau
// Calcule as raízes de ax² + bx + c = 0, validando os casos de a=0 e o valor de Delta.
// SOLUÇÃO:
const a = Number(input("Digite o valor de a: "));
const b = Number(input("Digite o valor de b: "));
const c = Number(input("Digite o valor de c: "));

if (a === 0) {
  console.log("Não é uma equação do segundo grau (a não pode ser zero).");
} else {
  const delta = (b * b) - (4 * a * c);
  if (delta < 0) {
    console.log("Não existem raízes reais.");
  } else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`Delta = ${delta}. Raiz única: x = ${x.toFixed(2)}`);
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Delta = ${delta}. Raízes: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
  }
}

// 17. Ano bissexto
// Leia um ano e informe se é bissexto.
// Ano bissexto: divisível por 4, mas não por 100, exceto se divisível por 400.
// SOLUÇÃO:
const ano = Number(input("Digite um ano: "));

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  console.log(`${ano} é um ano bissexto.`);
} else {
  console.log(`${ano} não é um ano bissexto.`);
}

// 18. Par ou ímpar
// Leia um inteiro e determine se é par ou ímpar.
// SOLUÇÃO:
const numero18 = Number(input("Digite um número inteiro: "));

if (Number.isInteger(numero18)) {
  if (numero18 % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }
} else {
  console.log("Por favor, digite um número inteiro.");
}

// 19. Características de um número
// Leia um número e indique se é (Par/Ímpar) e (Positivo/Negativo).
// SOLUÇÃO:
const num19 = Number(input("Digite um número: "));

let paridade, sinal;

if (Number.isInteger(num19)) {
  if (num19 % 2 === 0) {
    paridade = "Par";
  } else {
    paridade = "Ímpar";
  }

  if (num19 > 0) {
    sinal = "Positivo";
  } else if (num19 < 0) {
    sinal = "Negativo";
  } else {
    sinal = "Zero";
  }

  console.log(`O número é ${paridade} e ${sinal}.`);
} else {
  console.log("Por favor, digite um número inteiro.");
}

// 20. Investigação criminal
// Faça 5 perguntas sobre um crime e classifique o suspeito.
// Respostas positivas aumentam a suspeição.
// SOLUÇÃO:
let positivas = 0;

const respostas = [
  "Você telefonou para a vítima? (sim/nao): ",
  "Você esteve no local do crime? (sim/nao): ",
  "Você mora perto da vítima? (sim/nao): ",
  "Você devia para a vítima? (sim/nao): ",
  "Você já trabalhou com a vítima? (sim/nao): "
];

for (const pergunta of respostas) {
  const resp = input(pergunta).toLowerCase();
  if (resp === "sim") {
    positivas++;
  }
}

if (positivas === 2) {
  console.log("Suspeita");
} else if (positivas >= 3 && positivas <= 4) {
  console.log("Cúmplice");
} else if (positivas === 5) {
  console.log("Assassino");
} else {
  console.log("Inocente");
}

// 21. Maior e menor entre dois números
// Peça dois números e mostre qual o maior e o menor.
// SOLUÇÃO:
const n21A = Number(input("Digite o primeiro número: "));
const n21B = Number(input("Digite o segundo número: "));

if (n21A > n21B) {
  console.log(`Maior: ${n21A}, Menor: ${n21B}`);
} else if (n21B > n21A) {
  console.log(`Maior: ${n21B}, Menor: ${n21A}`);
} else {
  console.log("Os números são iguais.");
}

// 22. Maior e menor entre três inteiros
// Receba três números e informe o maior e o menor.
// SOLUÇÃO:
const x22 = Number(input("Digite o primeiro número: "));
const y22 = Number(input("Digite o segundo número: "));
const z22 = Number(input("Digite o terceiro número: "));

let maior22 = x22, menor22 = x22;

if (y22 > maior22) maior22 = y22;
if (z22 > maior22) maior22 = z22;

if (y22 < menor22) menor22 = y22;
if (z22 < menor22) menor22 = z22;

console.log(`Maior: ${maior22}`, `Menor: ${menor22}`);

// 23. Par ou ímpar em C
// Este exercício é em linguagem C, não JavaScript.
// SOLUÇÃO: Pulado - exercicio em linguagem C.
console.log("Exercicio 23: Este exercicio e em linguagem C, nao JavaScript.");

// 24. Circunferência
// Pergunte o raio e mostre diâmetro, comprimento e área.
// SOLUÇÃO:
const raio = Number(input("Digite o raio da circunferência: "));
const pi = 3.14159;
const diametro = raio * 2;
const comprimento = 2 * pi * raio;
const area = pi * (raio * raio);

console.log(`Diâmetro: ${diametro.toFixed(2)}`);
console.log(`Comprimento: ${comprimento.toFixed(2)}`);
console.log(`Área: ${area.toFixed(2)}`);

// 25. Doação de sangue
// Pergunte a idade (18 a 67 anos) e informe se a pessoa pode doar.
// SOLUÇÃO:
const idade25 = Number(input("Digite sua idade: "));

if (idade25 >= 18 && idade25 <= 67) {
  console.log("Você pode doar sangue.");
} else {
  console.log("Você não pode doar sangue.");
}

// 26. Validação de data
// Pergunte dia, mês e ano e informe se a data é válida (considerando todos os meses com 31 dias).
// SOLUÇÃO:
const dia26 = Number(input("Digite o dia: "));
const mes26 = Number(input("Digite o mês: "));
const ano26 = Number(input("Digite o ano: "));

let dataValida = true;

if (ano26 < 1 || ano26 > 9999) {
  dataValida = false;
} else if (mes26 < 1 || mes26 > 12) {
  dataValida = false;
} else if (dia26 < 1 || dia26 > 31) {
  dataValida = false;
}

if (dataValida) {
  console.log(`A data ${dia26}/${mes26}/${ano26} é válida.`);
} else {
  console.log(`A data ${dia26}/${mes26}/${ano26} é inválida.`);
}

// 27. Troca de valores
// Leia x e y, mostre os valores, troque-os e mostre novamente.
// SOLUÇÃO:
let  x27 = Number(input("Digite o valor de x: "));
let  y27 = Number(input("Digite o valor de y: "));

console.log(`Antes da troca: x = ${x27}, y = ${y27}`);

const temp = x27;
x27 = y27;
y27 = temp;

console.log(`Depois da troca: x = ${x27}, y = ${y27}`);


// 24. Circunferência
// Escreva um programa que pergunte o raio de uma circunferência e mostre:
// - Diâmetro;
// - Comprimento;
// - Área.
// SOLUÇÃO:
const raio = Number(input("Digite o raio da circunferência: "));
const PI = 3.14159265359;
const diametro = 2 * raio;
const comprimento = 2 * PI * raio;
const area = PI * raio * raio;

console.log(`\n--- Circunferência ---`);
console.log(`Raio: ${raio.toFixed(2)}`);
console.log(`Diâmetro: ${diametro.toFixed(2)}`);
console.log(`Comprimento: ${comprimento.toFixed(2)}`);
console.log(`Área: ${area.toFixed(2)}`);

// 25. Doação de sangue
// Para doar sangue é necessário ter entre 18 e 67 anos.
// Faça um programa que pergunte a idade de uma pessoa e informe se ela pode doar sangue.
// > Utilize os operadores lógicos '&&' e '||'.
// SOLUÇÃO:
const idade25 = Number(input("Digite a sua idade: "));
const podeDoar = idade25 >= 18 && idade25 <= 67;

if (podeDoar) {
  console.log(`Você tem ${idade25} anos. Pode doar sangue!`);
} else {
  if (idade25 < 18) {
    console.log(`Você tem ${idade25} anos. É menor de 18 anos. Não pode doar sangue.`);
  } else {
    console.log(`Você tem ${idade25} anos. É maior de 67 anos. Não pode doar sangue.`);
  }
}