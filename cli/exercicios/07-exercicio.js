// Receba um texto e mostre se é um email usando regex 


// ^limitador inicio  
// [\w.-](w em minusculo) ele recebe letra maiuscula miniuscula e underline potunação e numero
// [\w]+ ele recebe letra maiuscula e minuscula underline e numero (lembrando quando vem o sinal de +  ele le mais um caractere) 
// (@) obrigatorio ter o @
//(\.br)? condicao de parada que tem que conter .br / ? tonar a condicao opcional receber o .br
// $ limitador de fim 



let regex = /^[\w.-]+@[\w]+\.[\w]+(\.br)?$/
let email = 'caio.roldao16@gmail.com'

console.log(regex.test(email));
