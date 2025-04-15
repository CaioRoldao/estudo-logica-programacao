/* 
METODOS RECURSIVOS
*/

function meufor(list, index) {
    if (index < list.length) {
        console.log(list[index]);
        meufor(list, ++index)
    }
    return
}

const names = ['maria', 'joão','caio']

meufor(names, 0)


function countDown(n) {
    if (n <= 0) {
        return
    }

    console.log(n);

    n = n - 1
    
    countDown(n)
}

countDown(5)

// formas de interromper a execução de um fluxo

// break
let inputPresent = false
const input = 'moveis'
const categories = ['notebook', 'moveis', 'livros', 'brinquedos', 'informatica']

for (let i = 0; i < categories.length; i++) {
    const itemDaLista = categories[i]

    if (input == itemDaLista) {
        inputPresent = true
        break
    
    }
    console.log(itemDaLista);
    
}    
console.log();
console.log('o input esta na lista', inputPresent);

// exemplo de continue 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (let i = 0; i < numeros.length; i++){
    const item = numero[i]

    if(!(item % 2 == 0)){
        continue
    }

    console.log(item);
    
}


// label (podemos nomear cada for, assim podemos usar isso para determinar qual for vamos parar)
fora:
for (let i = 0; i < numeros.length; i++){
    dentro:
    for(let j = 0; j < numeros.length; j++){
        break fora
    }
}