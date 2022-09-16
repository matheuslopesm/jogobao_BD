// Aqui é onde estão os papéis de negócio
const clientesData = require('../data/clienteData.js')

exports.getClientes = function () {
    return clientesData.getClientes()
}

exports.getCliente = async function (id) {
    const cliente = await clientesData.getCliente(id)
    if(!cliente) throw new Error('Cliente not found')
    return cliente
}

exports.saveCliente = async function(cliente) {
    const existingCliente = await clientesData.getClienteByCNome(cliente.cnome)
    if(existingCliente) throw new Error('Cliente already exists')
    return clientesData.saveCliente(cliente)
}

exports.deleteCliente = function(id) {
    return clientesData.deleteCliente(id)
}

exports.updateCliente = async function(id, cliente){
    await exports.getCliente(id)
    return clientesData.updateCliente(id, cliente)
}