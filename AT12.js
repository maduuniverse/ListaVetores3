let numeros = [];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let primeiro = numeros.shift();
numeros.push(primeiro);

alert(numeros);
