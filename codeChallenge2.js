// 8f24a7d22793c13f7acc2673a00fa1d2
// 4a2423216626c359f23bdf39eb5a3ae6fa7079b0

var S = 4
const numeros = [-2, -1]

function cuadrado(arreglo, S){
    entrada = S.toString();
    entradaAct = parseInt(entrada + entrada);
    var numCuadrado = []
    console.log("numero de entrada " + entradaAct)

    arreglo.forEach(element => {
        var numElevado = element ** 2
        
            numCuadrado.push(numElevado < entradaAct ? numElevado: numCuadrado.pop())
    });
    return numCuadrado.sort((a, b) => a-b);
}

console.log(cuadrado(numeros, S))
