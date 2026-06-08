let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let multiplicador = Number(prompt("Digite o multiplicador:"));

for (let i = 0; i < 5; i++) {
    numeros[i] *= multiplicador;
}

alert(numeros);
