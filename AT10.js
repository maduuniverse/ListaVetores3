let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

let posMaior = numeros.indexOf(maior);
let posMenor = numeros.indexOf(menor);

[numeroMaior, numeroMenor] = [numeros[posMaior], numeros[posMenor]];

numeros[posMaior] = numeroMenor;
numeros[posMenor] = numeroMaior;

alert(numeros);
