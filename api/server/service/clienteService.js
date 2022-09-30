// Aqui é onde estão os papéis de negócio
const clientesData = require('../data/clienteData.js')

exports.getClientes = function () {
    return clientesData.getClientes()
}

exports.getCliente = async function (idc) {
    const cliente = await clientesData.getCliente(idc)
    if(!cliente) throw new Error('Cliente not found')
    return cliente
}

exports.saveCliente = async function(cliente) {
    const existingCliente = await clientesData.getClienteByCNome(cliente.cnome)
    if(existingCliente) throw new Error('Cliente already exists')
    return clientesData.saveCliente(cliente)
}

exports.deleteCliente = function(idc) {
    return clientesData.deleteCliente(idc)
}

exports.updateCliente = async function(idc, cliente){
    await exports.getCliente(idc)
    return clientesData.updateCliente(idc, cliente)
}