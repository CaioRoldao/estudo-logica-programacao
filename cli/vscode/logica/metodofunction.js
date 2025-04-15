function somar() {
    console.log(10 + 60);
    
}

somar()



function somar1(n1 , n2) {
    console.log(n1 +n2);
    
}

somar1( 20 , 75)


function ValidarCpf(cpf) {
    if (cpf.length != 11) {
        console.log('cpf invalido');
        return false
     }   else {
              return true
    }
}

let cpfValido = ValidarCpf(12345678901)