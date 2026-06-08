let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

let repetido = false;

for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
        if (numeros[i] === numeros[j]) {
            repetido = true;
        }
    }
}

if (repetido) {
    alert("Existem números repetidos.");
} else {
    alert("Não existem números repetidos.");
}
