const Sequelize = require('sequelize');
const database = require('../database/db');
 
const Order = database.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull     : false,
        primaryKey    : true
    },
    cpf: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    coupon: {
        type     : Sequelize.STRING(100),
        allowNull: true
    },
    issueDate: {
        type         : Sequelize.DATE,
        defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    hasCode: {//do I need it ?
        type      : Sequelize.INTEGER(1),
        allowNull : true,
        defaultValue: '0',
    },
}, {
    timestamps: false,
    tableName: 'order',
})
 
module.exports = Order;