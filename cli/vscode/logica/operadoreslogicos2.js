let aceitaCartao = false
let aceitaDinheiro = true 
let temDesconto = true 


let possoCompra = (aceitaCartao || aceitaDinheiro) && temDesconto

console.log('Posso comprar', possoCompra);
