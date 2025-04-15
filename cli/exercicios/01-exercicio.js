/* O etanol tem cerca de 70% do redimento da gasolina. Receba o valor da gasolina  e do etanol
iforme qual compensa mais.
*/

let gasolina = 5.40
let etanol = 2.20
 
function combustivel(etanol, gasolina) {
    let redimentoEtanol = 0.70
    if (gasolina >= etanol / redimentoEtanol ) {
        console.log(' o etanol compensa ');
   
    } else{
        console.log('gasolina compensa');
        
    }    
    
}
combustivel(etanol,gasolina)

javascript
combustivel(2.20,5.40)