/*

LOGiCA DE PROGRAMÇÃO 

*/


let c1 = 10 > 5   // maior que 
let c2 = 10 < 5 // menor que 
let c3 = 10 == 5 // igual a 
let c4 = 10 >= 5// maior ou igual
let c5 = 10 <=  5// menor ou igual 
let c6 = 10 !=  5// diferente de 



/*

operadores logicos 

*/

// && - || - | - &

// && é quando as duas comparações forem verdadeiras 

let range = (2 > 1) && (1 < 10)
console.log('2 range 1-9', range);


let range2 = (-1 > 0) && (-1 < 10)

console.log('2 range  1-9', range2);

let d1 = ('edney' == 'matheus') || ('wesley' == 'wesley')

console.log(d1);




let aceitaCartao = false
let aceitaDinheiro = true
let temDesconto = true 


let possoCompra = (aceitaCartao || aceitaDinheiro) && temDesconto

console.log('Posso compra', possoCompra);
