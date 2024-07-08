// 8f24a7d22793c13f7acc2673a00fa1d2
// 4a2423216626c359f23bdf39eb5a3ae6fa7079b0


function filtrarDigito(numeros, S){
    entrada = S.toString();
    var resultado = [];

    numeros.forEach(element => {
        var nuevoNum = element.toString().split('').filter(digito => 
            digito < S).join('');
            resultado.push(nuevoNum ? parseInt(nuevoNum, 10): resultado.pop())
    });

    return resultado;
}

var arrayNumerico = [51, 55, 0, 12, 81];
var S = 8;
var resultado = filtrarDigito(arrayNumerico, S);
console.log(resultado.reverse())




