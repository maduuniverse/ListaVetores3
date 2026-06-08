let numeros = [];
let soma = 0;

for (let i = 1; i < 5; i += 2) {
    numeros[i] = Number(prompt("Digite um número:"));
}

for (let i = 1; i < 5; i += 2) {
    soma += numeros[i];
}

alert("Soma das posições ímpares:", soma);
