let nome = 'Caio Vinicius'
let idade1 = '36 anos'
let comidaFavorita = 'churrasco'


console.log('Meu nome',nome ,'tenho', idade1 , 'minha comida favorita é' , comidaFavorita);



let idade = 20

if (idade < 13) {
    console.log('voce é uma criança');
    
}else if ((idade >= 13) && (idade < 18) ) {
    console.log('voce é um adolecente');
    
}else if ((idade >=18) && (idade <=64)) {
    console.log(' voce é adulto');
    
}else{
    console.log('voce é um idoso');
    
}


let n = 23


if ((n % 2 == 0)) {
    console.log(n,'ele é um numero par');
    
    
}else
console.log(n,'ele é um numero impar');




let podeVotar = 17

if ((podeVotar < 16) ) {
    console.log('Não pode votar.');

}else if ((podeVotar >=16) || (podeVotar<=17) && (podeVotar >= 70)) {
    console.log('Votar é opcional');
    
}else
console.log('Votar é obrigatorio');



let numb1 = 27
let numb2 = 54
let numb3 = 19


if ((numb1 > numb2) && (numb1 > numb3))  {
    console.log(numb1,'é o maior numero' );
    
}else if ((numb2 > numb1) && (numb2 > numb3)) {
    console.log(numb2,'é o maior numero');

}else 
console.log(numb3,'é o maior numero');





function semanaCorrido(dias) {
    if ((dias >= 1)  && (dias <=5)) {
        console.log("Seria um dia Util");
        
    }else if ((dias >5)  &&  (dias <=7)) {
        console.log('Seria dia final de semana');
        
    }else
    console.log('dia invalido');
    
        
}

semanaCorrido()





let numbers = [3, 7, 9, 20, 43,]

for (let i = 0; i < numbers.length; i++) {
    
let numeroAtual = numbers[i]
 if (numeroAtual >=10)   {
    console.log('ele e maior que 10', numeroAtual);
    
 }
      
}
 


function converterPeso(peso,planeta) {
   switch (planeta) {

    case 'mercurio':
        const mercurio = (peso)* 0.37
        console.log(`No planeta ${planeta} o peso é ${mercurio}`);
        break;
    case 'venus':
        const venus = (peso)* 0.88
        console.log(`No planeta ${planeta} o peso é ${venus}`);
        break;
    case 'jupiter':
        const jupiter = (peso)* 2.64
        console.log(`No planeta ${planeta} o peso é ${jupiter}`);
        break;
    case 'saturno':
        const saturno = (peso)* 1.15
        console.log(`No planeta ${planeta} o peso é ${saturno}`);
        break;
    case 'marte':
      const marte = (peso)* 0.38
      console.log(`No planeta ${planeta} o peso é ${marte}`);
        break;
    case 'urano':
      const urano = (peso)* 1.17
      console.log(`No planeta ${planeta} o peso é ${urano}`);
        break;
                               
   

    default:
        console.log('Planeta nao indetificado');
        
        break;
   } 
}converterPeso(102, 'urano')




function listaFiltrada(numeroA, numeroB ) {
    const listaPares = []
for (let i = numeroA; i <= numeroB; i++){
    
  if (i % 2 == 0) {
    listaPares.push(i)
  }  
        
}
    
return listaPares
}
console.log(listaFiltrada(5, 10));

