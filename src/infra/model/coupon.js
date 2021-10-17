const Sequelize = require('sequelize');
const database = require('../database/db');
 
const Coupon = database.define('coupon', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull     : false,
        primaryKey    : true
    },
    code: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    percentage: {
        type      : Sequelize.FLOAT,
        allowNull : true
    },
    expireDate: {
        type       : Sequelize.DATEONLY,
        allowNull  : true,
    }
}, {
    timestamps: false,
    tableName: 'coupon',
})
 
module.exports = Coupon;