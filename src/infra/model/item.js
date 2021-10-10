const Sequelize = require('sequelize');
const database = require('../database/db');
 
const Item = database.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // idade: { type: Sequelize.INTEGER },
    // uf: { type: Sequelize.STRING(2) }
}, {
    timestamps: false,
    tableName: 'item',
})
 
module.exports = Item;