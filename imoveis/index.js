const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem vindo a Imobiliária - A\n" +
        "Total de imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Cadastrar Imóvel\n2. Listar Imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Digite o nome do proprietáriio do imóvel:")
            imovel.quartos = parseFloat(prompt("Qual  a quantidade de quartos o imóvel possui?"))
            imovel.banheiro = parseFloat(prompt("Quantos banheiros o imóvel possui?"))
            imovel.garagem = prompt("O imóvel possui garagem? ( Sim/Não)")

            const confirma = confirm(
                "Salvar novo Cadastro de Imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuantidade  de quartos: " + imovel.quartos +
                "\nQuantidade de Banheiros: " +imovel.banheiro +
                "\nPossui Garagem? " + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
            }
            break;

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPosuu Garagem? " + imoveis[i].garagem
                )
            }    
            break;

        case "3":
            alert("Saindo...")
            break;

        default:
            alert("Opção Inválida!")
            break;
    }

} while (opcao !== "3");