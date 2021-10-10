//clienteRepository.js
const Item = require('../model/Item');
 
function findAll(limit) {
    return Item.findAll({ limit });
}
 
module.exports = { findAll }