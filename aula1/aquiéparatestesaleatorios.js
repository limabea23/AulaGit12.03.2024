let numero = 67;

let limiteTabuada = -10;

if (limiteTabuada <= 0) {
    console.log("Insira um limite válido!");
}

if (limiteTabuada % 1 !== 0) {
    console.log("Insira um limite com número inteiro.");
} else{
    for (let i = 1; i <= limiteTabuada; i++) {
        console.log(numero, "x", i, "= ", numero * i);
    }
}