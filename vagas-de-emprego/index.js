const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += "(" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    
    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe o nome para vaga:")
    const descricao = prompt("Informe uma decrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome +
        "\nDescrição: " + descricao +
        "\nData limite: " + dataLimite
    )
    if (confirmacao){
        const novaVaga = { nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada!")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o Índice da vaga que deseja exibir:")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de Candidatos: " + vaga.candidatos.length +
        "\nCandidatos Inscritos: " +candidatosEmTexto
    )
    
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para qual o(a) candidadto(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o(a) candidadto(a) " +candidato+
        " na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite
    )
    
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição Realizada com Sucesso!")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o Índice da vaga que deseja excluir!")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " +indice + "?\n" +
        "NOme: " + vaga.nome + "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite
    )
    
    if (confirmacao){
        vagas.slice(indice, 1)
        alert("Vaga excluída!")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro  de Vagas de Emprego" +
        "\nEscolha uma das opções:" +
        "\n1. Listar Vagas" +
        "\n2. Criar uma Vaga" +
        "\n3. Visualizar uma Vaga" +
        "\n4. Inscrever um(a) Candidadto(a)" +
        "\n5. Excluir uma Vaga" +
        "\n6. Sair"
    )
    return opcao
}

function executar() {
    let opcao = ""

    do{
        opcao = exibirMenu()

        switch (opcao){
            case "1":
                listarVagas()
                break

            case "2":
                novaVaga()
                break

            case "3":
                exibirVaga()
                break

            case "4":
                inscreverCandidato()
                break

            case "5":
                excluirVaga()
                break

            case "6":
                alert("Saindo...")
                break
                default:
                    alert("Opção Ínvalida!") 
        }
    } while (opcao !== "6");
}

    executar()