let vetorA = [1, 2, 3, 4, 5];
let vetorB = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
    vetorA[i] = Number(prompt("Digite um número:"));
}

for (let i = 0; i < 5; i++) {
    vetorB[i] = vetorA[i] ** 2;
}

alert("Vetor original:", vetorA);
alert("Vetor quadrado:", vetorB);
