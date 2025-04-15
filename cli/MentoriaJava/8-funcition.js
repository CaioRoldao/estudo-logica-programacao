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
let cpfValid = ValidarCpf(37442409830)


let cpfValido = ValidarCpf(37442409830)
if (cpfValido) {
    console.log('abertura de conta autorizada');
    
}else{
    console.log('abertura de conta negada');
    
}