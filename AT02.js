let numeros = [1, 2, 3, 4, 5];
let contador = 0;

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

for (let i = 0; i < 5; i++) {
    if (numeros[i] % 2 !== 0) {
        contador++;
    }
}

alert("Quantidade de ímpares:", contador);
