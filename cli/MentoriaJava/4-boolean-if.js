/*

boolean IF/ ELSE 


*/

// IF  aceita boolean 


// if aceita um booolean 

if (condicaoDoTempo = 'chovendo') {
    console.log('esta chovendo, pegue um guarda-chuva v2' );
    
}else{
    console.log('NAO ESTA CHOVENDO');
    
}


let condicaoDoTempo2 = 'frio' 

if (condicaoDoTempo2 = 'chovendo') {
    console.log('esta chovendo pegue um guarda-chuva -v2');
    
}else if (condicaoDoTempo2 = 'nevando') {
    console.log('esta nevando pegue uma blusa amigo!');
        
}else if (condicaoDoTempo2 = 'frio') {
    console.log('esta frio leve um casaco viado');
    
}else{
    console.log('tempo normal tem que trabalhar');
    
}

/*   
ESTRUTURA IF 
*/

let imc = 24.999

if (imc < 18.5) {
    console.log('abaixo do peso');   
}else if ((imc >= 18.5) && (imc < 25)) {
    console.log('peso normal');
    
}else if ((imc >= 25) && (imc <30)) {
    
}else{
    console.log('acima do peso');
    
}