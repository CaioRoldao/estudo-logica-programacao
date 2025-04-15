// Receba um nome completo e transforme a primera letra em maiuscula 


/*
function letraInicialMaiuscula(nomeCompleto) {
    let maiuscula =''
    let proximaLetraDeveSerMaiscula = true

    for( let i = 0; i < nomeCompleto.length; i++){
      let letraInicial = nomeCompleto.charat()

    if (proximaLetraDeveSerMaiscula) {
        letraInicial = letraInicial.tolocalUppercase()
        
    }
}
    proximaLetraDeveSerMaiscula = letraInicial == ''

    return maiuscula
}

letraInicialMaiuscula('caio vinicius')*/
function nomeComAPrimeiraLetraMaiuscula(nomeCompleto){

    let primeiraLetraEmMaiusculo = true
    let maiuscula = ''


    for(let i = 0; i < nomeCompleto.length; i++){
        let primeiraLetra = nomeCompleto.charAt(i)

        if(primeiraLetraEmMaiusculo){
            primeiraLetra = primeiraLetra.toLocaleUpperCase()
        }
        if(primeiraLetra == ''){
            primeiraLetraEmMaiusculo = true
        }else{
            primeiraLetraEmMaiusculo = false
        }
        maiuscula = maiuscula + primeiraLetra

    }

    console.log(maiuscula);
}


let nomeCompleto1 = process.argv[2] + ''
let nomeCompleto2 = process.argv[3] + ''
nomeComAPrimeiraLetraMaiuscula(nomeCompleto1)
nomeComAPrimeiraLetraMaiuscula(nomeCompleto2)