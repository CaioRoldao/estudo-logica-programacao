/*
ESCOPO DE VARIAVEIS 
*/

// TODA VARIAVEL TEM UM AONDE NASCE E ONDE MORRE 


let n1 = 10 


function testEscopo(n1) {
    for (let n1 = 0; n1 < 5; n1++) {
        console.log(n1);
        
    }
    console.log(n1);
    
}

testEscopo(22)


console.log(n1);
