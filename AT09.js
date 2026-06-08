let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

for (let i = 0; i < 5; i++) {
    if (numeros[i] % 2 === 0) {
        soma += numeros[i];
    }
}

alert("Soma dos pares:", soma);
