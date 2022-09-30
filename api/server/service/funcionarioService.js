// Aqui é onde estão os papéis de negócio
const funcionariosData = require('../data/funcionarioData.js')

exports.getFuncionarios = function () {
    return funcionariosData.getFuncionarios()
}

exports.getFuncionario = async function (idf) {
    const funcionario = await funcionariosData.getFuncionario(idf)
    if(!funcionario) throw new Error('Funcionario not found')
    return funcionario
}

exports.saveFuncionario = async function(funcionario) {
    const existingFuncionario = await funcionariosData.getFuncionarioByFNome(funcionario.fnome)
    if(existingFuncionario) throw new Error('Funcionario already exists')
    return funcionariosData.saveFuncionario(funcionario)
}

exports.deleteFuncionario = function(idf) {
    return funcionariosData.deleteFuncionario(idf)
}

exports.updateFuncionario = async function(idf, funcionario){
    await exports.getFuncionario(idf)
    return funcionariosData.updateFuncionario(idf, funcionario)
}