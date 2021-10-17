const Sequelize = require('sequelize');
const database = require('../database/db');
 
const Item = database.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull     : false,
        primaryKey    : true
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type      : Sequelize.STRING(500),
        allowNull : true
    },
    price: {
        type         : Sequelize.FLOAT,
        defaultValue : null,
    },
}, {
    timestamps: false,
    tableName: 'item',
})
 
module.exports = Item;