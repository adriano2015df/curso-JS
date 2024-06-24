let nome = window.prompt("Digite seu Nome:")
let sobrenome = window.prompt("Digite seu Sobrenome:")
let campoDeEstudo = window.prompt("Qual seu Campo  de Estudo?")
let nascimento = window.prompt("Digite o ano  de seu nascimento:")

alert(
    "Cadastro realizado com Sucesso!\n" +
    "\nNome Completo: " + nome + "" + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo +
    "\nIdade:" + (2024 - nascimento)
)