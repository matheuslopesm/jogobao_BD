// Aqui é onde estão os papéis de negócio
const vendasData = require('../data/vendaData.js')

exports.getVendas = function () {
    return vendasData.getVendas()
}

exports.getVenda = async function (cod) {
    const venda = await vendasData.getVenda(cod)
    if(!venda) throw new Error('Venda not found')
    return venda
}

exports.saveVenda = async function(venda) {
    const existingVenda = await vendasData.getVendaByCod(venda.cod)
    if(existingVenda) throw new Error('Venda already exists')
    return vendasData.saveVenda(venda)
}

exports.deleteVenda = function(cod) {
    return vendasData.deleteVenda(cod)
}

exports.updateVenda = async function(cod, venda){
    await exports.getVenda(cod)
    return vendasData.updateVenda(cod, venda)
}
