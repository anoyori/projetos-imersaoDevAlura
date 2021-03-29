var valorDolarHojeTexto = prompt("Qual a cotação do dólar atual?")
var valorDolarHoje = parseFloat(valorDolarHojeTexto)

var valorDolarTexto = prompt("Qual o valor que deseja converter?")
var valorDolar = parseFloat(valorDolarTexto)

valorReal = valorDolar * valorDolarHoje
valorRealFixado = valorReal.toFixed(2)

alert("O valor em real é: " + valorRealFixado)



