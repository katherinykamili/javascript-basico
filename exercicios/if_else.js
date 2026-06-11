// Lista de Exercícios - Estruturas Condicionais

//  1. Maior entre dois números
// Faça um programa que peça dois números e imprima o maior deles.

// > Dica: para realizar a inserção de dados pelo usuário utilize a função `input("texto para o usuario")`.
// SOLUÇÃO:
const num1 = Number(input("Digite o primeiro número: "));
const num2 = Number(input("Digite o segundo número: "));

if (num1 > num2) {
  console.log(`O maior número é: ${num1}`);
} else if (num2 > num1) {
  console.log(`O maior número é: ${num2}`);
} else {
  console.log("Os números são iguais.");
}
// 2. Número positivo ou negativo
// Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
// SOLUÇÃO:
const valor = Number(input("Digite um valor: "));

if (valor > 0) {
  console.log("O valor é positivo.");
} else if (valor < 0) {
  console.log("O valor é negativo.");
} else {
  console.log("O valor é zero.");
}

// 3. Identificação de sexo
// Faça um programa que verifique se uma letra digitada é "F" ou "M".
// Conforme a letra digitada, exiba:
// - F → Feminino
// - M → Masculino
// - Qualquer outra letra → Sexo inválido
// SOLUÇÃO:
const sexo = input("Digite seu sexo (F/M): ").toUpperCase();

if (sexo === "F") {
  console.log("Feminino");
} else if (sexo === "M") {
  console.log("Masculino");
} else {
  console.log("Sexo inválido");
}

// 4. Vogal ou consoante
// Faça um programa que verifique se uma letra digitada é vogal ou consoante.
// SOLUÇÃO:
const letra = input("Digite uma letra: ").toLowerCase();

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  console.log("A letra é uma vogal.");
} else if (letra.length === 1 && /[a-z]/.test(letra)) {
  console.log("A letra é uma consoante.");
} else {
  console.log("Entrada inválida. Digite apenas uma letra.");
}

// 5. Média de notas
// Faça um programa para a leitura de duas notas parciais de um aluno.
// Exiba:
// - "Aprovado", se a média for maior ou igual a 7;
// - "Aprovado com Distinção", se a média for igual a 10;
// - "Reprovado", se a média for menor que 7.
// SOLUÇÃO:
const nota1 = Number(input("Digite a primeira nota: "));
const nota2 = Number(input("Digite a segunda nota: "));
const media = (nota1 + nota2) / 2;

if (media === 10) {
  console.log("Aprovado com Distinção");
} else if (media >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// 6. Maior de três números
// Faça um programa que leia três números e mostre o maior deles.
// SOLUÇÃO:
const n1 = Number(input("Digite o primeiro número: "));
const n2 = Number(input("Digite o segundo número: "));
const n3 = Number(input("Digite o terceiro número: "));

let maior = n1;

if (n2 > maior) {
  maior = n2;
}

if (n3 > maior) {
  maior = n3;
}

console.log(`O maior número é: ${maior}`);

// 7. Maior e menor de três números
// Faça um programa que leia três números e mostre o maior e o menor.
// SOLUÇÃO:
const a = Number(input("Digite o primeiro número: "));
const b = Number(input("Digite o segundo número: "));
const c = Number(input("Digite o terceiro número: "));

let maiorVal = a;
let menorVal = a;

if (b > maiorVal) {
  maiorVal = b;
}
if (c > maiorVal) {
  maiorVal = c;
}

if (b < menorVal) {
  menorVal = b;
}
if (c < menorVal) {
  menorVal = c;
}

console.log(`Maior: ${maiorVal}`);
console.log(`Menor: ${menorVal}`);

// 8. Produto mais barato
// Faça um programa que pergunte o preço de três produtos e informe qual comprar (o mais barato).
// SOLUÇÃO:
const preco1 = Number(input("Digite o preço do primeiro produto: R$ "));
const preco2 = Number(input("Digite o preço do segundo produto: R$ "));
const preco3 = Number(input("Digite o preço do terceiro produto: R$ "));

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

console.log(`O produto mais barato é o ${produtoMaisBarato} com preço R$ ${maisBarato.toFixed(2)}`);

// 9. Ordem decrescente
// Faça um programa que leia três números e mostre-os em ordem decrescente.
// SOLUÇÃO:
const x = Number(input("Digite o primeiro número: "));
const y = Number(input("Digite o segundo número: "));
const z = Number(input("Digite o terceiro número: "));

let maior9 = x, meio9 = y, menor9 = z;

// Encontra o maior
if (y > maior9) maior9 = y;
if (z > maior9) maior9 = z;

// Encontra o menor
if (x < menor9) menor9 = x;
if (y < menor9) menor9 = y;

// O do meio é o que sobrou
meio9 = (x + y + z) - maior9 - menor9;

console.log(`Ordem decrescente: ${maior9}, ${meio9}, ${menor9}`);

// 10. Turno de estudo
// Faça um programa que pergunte o turno em que você estuda (M-Matutino, V-Vespertino, N-Noturno)
// e exiba a saudação correspondente ou "Valor inválido".
// SOLUÇÃO:
const turno = input("Digite seu turno de estudo (M/V/N): ").toUpperCase();

if (turno === "M") {
  console.log("Bom dia!");
} else if (turno === "V") {
  console.log("Boa tarde!");
} else if (turno === "N") {
  console.log("Boa noite!");
} else {
  console.log("Valor inválido");
}



//  2. Número positivo ou negativo
// Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.



//  3. Identificação de sexo
// Faça um programa que verifique se uma letra digitada é **"F"** ou **"M"**.

// Conforme a letra digitada, exiba:

// - F → Feminino
// - M → Masculino
// - Qualquer outra letra → Sexo inválido



//  4. Vogal ou consoante
// Faça um programa que verifique se uma letra digitada é vogal ou consoante.



//  5. Média de notas
// Faça um programa para a leitura de duas notas parciais de um aluno.

// Exiba:

// - **Aprovado**, se a média for maior ou igual a 7;
// - **Aprovado com Distinção**, se a média for igual a 10;
// - **Reprovado**, se a média for menor que 7.



//  6. Maior de três números
// Faça um programa que leia três números e mostre o maior deles.



//  7. Maior e menor de três números
// Faça um programa que leia três números e mostre o maior e o menor deles.



//  8. Produto mais barato
// Faça um programa que pergunte o preço de três produtos e informe qual produto deve ser comprado, sabendo que a decisão é sempre pelo mais barato.



//  9. Ordem decrescente
// Faça um programa que leia três números e mostre-os em ordem decrescente.



//  10. Turno de estudo
// Faça um programa que pergunte em que turno você estuda.

// Digite:

// - M → Matutino
// - V → Vespertino
// - N → Noturno

// Exiba:

// - "Bom dia!"
// - "Boa tarde!"
// - "Boa noite!"
// - "Valor inválido"



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


//  13. Dia da semana
// Faça um programa que leia um número e exiba o dia correspondente da semana.

// | Número | Dia |
// |---------|-----|
// | 1 | Domingo |
// | 2 | Segunda |
// | 3 | Terça |
// | 4 | Quarta |
// | 5 | Quinta |
// | 6 | Sexta |
// | 7 | Sábado |

// Caso seja digitado outro valor, exiba:

```text
Valor inválido
```

//  14. Conceito por média
// Faça um programa que leia duas notas parciais e calcule a média.

// | Média | Conceito |
// |---------|----------|
// | 9,0 a 10,0 | A |
// | 7,5 a 9,0 | B |
// | 6,0 a 7,5 | C |
// | 4,0 a 6,0 | D |
// | 0 a 4,0 | E |

// Exiba:

// - Notas;
// - Média;
// - Conceito;
// - Situação.

Situação:

// - A, B ou C → APROVADO
// - D ou E → REPROVADO



//  15. Tipos de triângulo
// Faça um programa que peça os três lados de um triângulo.

// Verifique se os lados podem formar um triângulo.

// Se formarem, informe se é:

// - Equilátero → três lados iguais;
// - Isósceles → dois lados iguais;
// - Escaleno → três lados diferentes.

/// Dica

// Três lados formam um triângulo quando a soma de quaisquer dois lados é maior que o terceiro.



//  16. Equação do segundo grau
// Faça um programa que calcule as raízes da equação:

// ```text
// ax² + bx + c = 0
// ```

Regras:

// - Se `a = 0`, a equação não é de segundo grau.
// - Se `Δ < 0`, não possui raízes reais.
// - Se `Δ = 0`, possui apenas uma raiz real.
// - Se `Δ > 0`, possui duas raízes reais.


//  17. Ano bissexto
// Faça um programa que leia um ano e informe se ele é ou não bissexto.


//  18. Par ou ímpar
// Faça um programa que leia um número inteiro e determine se ele é par ou ímpar.

// > Dica: utilize o operador módulo `%`.


//  19. Características de um número
// Faça um programa que leia um número e pergunte qual operação deseja realizar.

// O resultado deve indicar se o número é:

// - Par ou ímpar;
// - Positivo ou negativo.



//  20. Investigação criminal
// Faça um programa que faça as seguintes perguntas:

// 1. Telefonou para a vítima?
// 2. Esteve no local do crime?
// 3. Mora perto da vítima?
// 4. Devia para a vítima?
// 5. Já trabalhou com a vítima?

Classificação:

// | Respostas positivas | Classificação |
// |---------------------|--------------|
// | 2 | Suspeita |
// | 3 ou 4 | Cúmplice |
// | 5 | Assassino |
// | Caso contrário | Inocente |



//  21. Maior e menor entre dois números
// Faça um programa que peça dois números ao usuário e mostre qual o maior e qual o menor.



//  22. Maior e menor entre três inteiros
// Faça um programa que receba três números inteiros e informe qual deles é o maior e qual é o menor.

// ### Desafio
// Você consegue criar mais de uma solução?



//  23. Par ou ímpar em C
// Escreva um programa em C que receba um número inteiro e diga se ele é par ou ímpar.

// > Dica: utilize o operador `%`.



//  24. Circunferência
// Escreva um programa que pergunte o raio de uma circunferência e mostre:

// - Diâmetro;
// - Comprimento;
// - Área.



//  25. Doação de sangue
// Para doar sangue é necessário ter entre 18 e 67 anos.

// Faça um programa que pergunte a idade de uma pessoa e informe se ela pode doar sangue.

// > Utilize os operadores lógicos `&&` e `||`.



//  26. Validação de data
// Escreva um programa que pergunte:

// - Dia;
// - Mês;
// - Ano.

// Informe se a data é válida ou não.

// Caso não seja válida, informe o motivo.

//  Considere

// - Todos os meses possuem 31 dias;
// - O ano atual é 2013.



//  27. Troca de valores
// Crie um programa que:

// 1. Leia um número e armazene em `x`;
// 2. Leia outro número e armazene em `y`;
// 3. Mostre os valores;
// 4. Troque os valores entre as variáveis;
// 5. Mostre os valores após a troca.

// Exemplo:
```text
Antes:
x = 10
y = 20

Depois:
x = 20
y = 10
```
