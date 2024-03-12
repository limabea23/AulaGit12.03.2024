let inicio = 0;
let fim = 10;
let par;
let resultado = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 0) {
        par = i;
        resultado = par + resultado;
        console.log(par);
    }

}

console.log(resultado)