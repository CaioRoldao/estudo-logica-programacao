// 1) Crie uma nova array chamada novasFrutas que contenha todas as frutas, mais "melancia", usando Spread Operator
/*
let novasFrutas = ["maçã", "banana", "laranja", "abacaxi"];


let frutaNovaLista = [...novasFrutas,"melancia"]

console.log(frutaNovaLista);





//  2) Use spread para criar um novo array chamado lanches com doces + salgados

const doces = ["chocolate", "bala"];
const salgados = ["pipoca", "batata frita"]; 

const lanceComSalgadoEdoces = [...doces,...salgados]
console.log(lanceComSalgadoEdoces);



// 3) Crie um novo objeto chamado usuarioAtualizado com os mesmos dados de usuario, mas com idade 26

const usuario = { nome: "João", idade: 25 };

const usuarioAtualizado = {...usuario,idade: 26}

console.log(usuarioAtualizado);


//4) Use spread para passar os valores [1, 2, 3] para a função soma

function soma(a, b, c, d) {
    return a + b + c + d;
  } 

  let valores= [2,45,23,56]

  console.log(soma(...valores));


  //5) Com base no clean code, comente o que esta incorreto no codigo abaixo e depois monte o codigo correto

//function soma(a,b){
//    return a+b;
//}   

/*function multiplica(x,y){
    return x*y;
}
var n=10;
var m=20;
var resultado1=soma(n,m);
var resultado2=multiplica(n,m);
console.log("Resultado1 é: "+resultado1);
console.log("Resultado2 é: "+resultado2);

// codigo escrito todo em uma unica linha, parametro nao segue o nome da variavel.

function somar (valor1, valor2){
    return valor1 + valor2
} 
function multiplicar(valor3, valor4) {
    return valor3 * valor4    
}

const valor1 = 10
const valor2 = 15
const valor3 = 20
const valor4 = 25

const resultadoSoma = somar(valor1, valor2)
const resuladoMultiplicacao = multiplicar(valor3, valor4)

console.log("esse é o resultado",resultadoSoma);
console.log("esse é o resltado", resuladoMultiplicacao);




function a(b, c, d, e, f) {
    if (b == true) {
      console.log("ok");
    } else {
      if (c > 10) {
        console.log("c é maior que 10");
      } else {
        if (d == "admin") {
          console.log("é admin");
        } else {
          console.log("erro");
        }
      }
    }
    console.log("fim");
  }
  
  var x = {n:"joao",i:30,e:"email@email.com",t:"9999-9999"};
  
  function y(z){
    console.log(z.n);
    console.log(z.i);
    console.log(z.e);
    console.log(z.t);
  }
  
  a(true,5,"admin",false,true)
  y(x)


function impremirdadosCadastrais(dadosCadastrais){
    return dadosCadastrais;
}
let dadosCadastrais = {
    nome:"joao",
    idade:30,
    email:"email@email.com",
    telefone:"(11)9.9999-9999"
};
console.log(impremirdadosCadastrais(dadosCadastrais));
//console.log("------------------------");
//console.log('fim');