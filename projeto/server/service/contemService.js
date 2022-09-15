// Aqui é onde estão os papéis de negócio
const contemsData = require('../data/contemData.js')

exports.getContems = function () {
    return contemsData.getContems()
}

exports.getContem = async function (prodnumeroserie) {
    const contem = await contemsData.getContem(prodnumeroserie)
    if(!contem) throw new Error('Contem not found')
    return contem
}

exports.saveContem = async function(contem) {
    const existingContem = await contemsData.getContemByProdNumeroSerie(contem.prodnumeroserie)
    if(existingContem) throw new Error('Contem already exists')
    return contemsData.saveContem(contem)
}

exports.deleteContem = function(prodnumeroserie) {
    return contemsData.deleteContem(prodnumeroserie)
}

exports.updateContem = async function(prodnumeroserie, contem){
    await exports.getContem(prodnumeroserie)
    return contemsData.updateContem(prodnumeroserie, contem)
}
