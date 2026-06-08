let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let ultimo = numeros.pop();
numeros.unshift(ultimo);

alert(numeros);
