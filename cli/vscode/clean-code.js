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

console.log('fim');