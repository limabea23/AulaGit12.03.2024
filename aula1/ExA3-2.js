let tentativas = 1;

let limite = 10;

let numeroAleatorio = (Math.floor(Math.random() * limite));

let numeroPessoa = (Math.floor(Math.random() * limite));

while (numeroPessoa != numeroAleatorio) {
    tentativas++;
    if (numeroPessoa < numeroAleatorio) {
        console.log("O seu número " + numeroPessoa + " é menor do que o número secreto!");
    } else {
        console.log("O seu número " + numeroPessoa + " é maior do que o número secreto!");
    }

    numeroPessoa = (Math.floor(Math.random() * limite));

}

console.log("Você acertou!! e o numero correto é " + numeroPessoa);
console.log("Numero de tentativas " + tentativas);