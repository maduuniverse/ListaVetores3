let numeros = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

for (let i = 1; i < 5; i += 2) {
    soma += numeros[i];
}

alert("Soma das posições ímpares:", soma);
