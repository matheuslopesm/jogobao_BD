// Aqui é onde estão os papéis de negócio
const funcionariosData = require('../data/funcionarioData.js')

exports.getFuncionarios = function () {
    return funcionariosData.getFuncionarios()
}

exports.getFuncionario = async function (id) {
    const funcionario = await funcionariosData.getFuncionario(id)
    if(!funcionario) throw new Error('Funcionario not found')
    return funcionario
}

exports.saveFuncionario = async function(funcionario) {
    const existingFuncionario = await funcionariosData.getFuncionarioByFNome(funcionario.fnome)
    if(existingFuncionario) throw new Error('Funcionario already exists')
    return funcionariosData.saveFuncionario(funcionario)
}

exports.deleteFuncionario = function(id) {
    return funcionariosData.deleteFuncionario(id)
}

exports.updateFuncionario = async function(id, funcionario){
    await exports.getFuncionario(id)
    return funcionariosData.updateFuncionario(id, funcionario)
}