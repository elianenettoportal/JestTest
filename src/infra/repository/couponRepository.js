//clienteRepository.js
const Coupon = require('../model/coupon');
 
function findAll(limit) {
    return Coupon.findAll({ limit });
}
 
module.exports = { findAll }