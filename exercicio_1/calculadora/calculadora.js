const n1 = prompt("Digite o Primeiro Número:")
const n2 = prompt("Digite o Segundo Número:")

const num1 = parseFloat(n1)
const num2 = parseFloat(n2)

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão " + divisao
)