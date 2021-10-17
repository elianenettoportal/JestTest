//clienteRepository.js
const Item = require('../model/Item');
 
function findAll(limit) {
    return Item.findAll({ limit });
}
function findById(id) {
    return Item.findByPk(id);
}
function findOne(whereClause) {
    //it expects an object {where:{ id: 1}}
    return Item.findOnde(whereClause);
}
function find(whereClause) {
    //it expects an object {where:{ id: 1}}
    return Item.find(whereClause);
}
module.exports = { findAll, findById, findOne, find }