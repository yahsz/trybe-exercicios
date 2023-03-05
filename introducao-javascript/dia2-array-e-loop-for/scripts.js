let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* percorrer o array imprimindo todos os valores contidos nele
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}*/

/* somar todos os valores e imprimir o resultado
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
   soma += numbers[i];
}
console.log("a soma de todos os valores é: " + soma);
*/

/*a media aritmetica dos valores
for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
let media = soma / numbers.length;
console.log("a media aritmetica dos valores é: " + media);
*/

/* usando if else para imprimir frases
for (let i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}
let media = soma / numbers.length;
console.log("a media aritmetica dos valores é: " + media);
if (media > 20) {
    console.log("valor maior que 20");
} 
else {
    console.log("valor menor ou igual a 20");
}
*/

/* qual o maior valor
let maior = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i]> maior){
        maior = numbers[i];
    }
}
console.log("o maior valor do array é: " + maior);
*/

/* quantidade de impares no array
let qtdImpares = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    qtdImpares++;
  }
}

if (qtdImpares > 0) {
  console.log("Existem " + qtdImpares + " valores ímpares no array.");
} else {
  console.log("Nenhum valor ímpar encontrado.");
}
*/

/* encontrando o menor valor
let menor = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  }
}
console.log("O menor valor do array é: " + menor);
*/

/* criando um array de 1 a 25
let numeros = [];
for (let i = 1; i <= 25; i++) {
  numeros.push(i);
}
console.log(numeros);
*/

/* resultado da divisao de cada numero por 2
let numeros = [];
for (let i = 1; i <= 25; i++) {
  numeros.push(i);
}
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i] / 2);
}
*/


