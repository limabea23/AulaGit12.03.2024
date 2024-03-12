let a = 3;
let b = 99;

let inicio;
let fim;

if (a > b){
    inicio = b;
    fim = a;
} else {
    inicio = a;
    fim = b;
}
while (inicio <= fim){ 
    console.log(inicio);
    inicio++;
}
    
console.log("Loop concluído!");




