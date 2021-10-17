//clienteRepository.js
const Order = require('../model/order');
 
function findAll(limit) {
    return Order.findAll({ limit });
}

async function saveOrder(orderData){
    await Order.update({ orderData });
}
 
module.exports = { findAll, saveOrder}