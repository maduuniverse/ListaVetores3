let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let maior = numeros[0];
let posicao = 0;

for (let i = 1; i < 5; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
        posicao = i;
    }
}

alert("Posição do maior valor:", posicao);
