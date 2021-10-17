const Sequelize = require('sequelize');
const database = require('../database/db');
 
const OrderItem = database.define('order_item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull     : false,
        primaryKey    : true
    },
    orderId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
            model: 'order',
            key: 'id',
        },
    },
    itemId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
            model: 'item',
            key: 'id',
        },
    },
    createDate: {
        type         : Sequelize.DATEONLY,
        defaultValue : Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    timestamps: false,
    tableName: 'order_item',
})
 
module.exports = OrderItem;