// 8f24a7d22793c13f7acc2673a00fa1d2
// 4a2423216626c359f23bdf39eb5a3ae6fa7079b0

const coins = [1,5,1,1,1,10,15,20,100]

function ascendente (arreglo){
    arreglo.sort((a, b) => a-b);

    var cambioMinimo = 1;

    for (const moneda of arreglo) {
        if(moneda > cambioMinimo){
            break;
        }
        cambioMinimo += moneda
    }
    return cambioMinimo; 
}

function monedasCreadas (arreglo){
    var combinaciones = nuevoArreglo();

}

console.log(ascendente(coins))