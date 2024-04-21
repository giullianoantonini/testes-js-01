

function encontrarAluno(nomeAluno, listaNomeAlunos) {
    // Retorna true se o nome do aluno está na lista, false caso contrário
    for (let i = 0; i < listaNomeAlunos.length; i++) {
        if (listaNomeAlunos[i] === nomeAluno)
            return true
    }
    return false;
}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    // Retorna uma lista de alunos que correspondem ao nome fornecido
    const alunosFiltrados = []
    for (let i = 0; i < listaNomeAlunos.length; i++) {
        if (listaNomeAlunos[i] === nomeAluno) {
            alunosFiltrados.push(listaNomeAlunos[i]);
        }
    }
    return alunosFiltrados
}

function construirAluno(nomeAluno, idadeAluno) {
    // Constrói e retorna um objeto aluno com nome e idade
    let objetoAluno = {
        nome: nomeAluno,
        idade: idadeAluno
    }
    return objetoAluno
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
};
