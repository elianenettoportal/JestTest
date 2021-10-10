
//db.js
//require('dotenv-safe').config();

const Sequelize = require('sequelize');
//const sequelize = new Sequelize(process.env.DATABASE_URL, {dialect: 'mysql'});
const sequelize = new Sequelize('projectcpf', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
  });

module.exports = sequelize;


// const mysql = require("mysql2/promise");

// var config = {
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : '',
//     database : 'projectcpf'
// };

// //'select ?+? as sum', [2, 2]
// async function executeQuery (query) {
//     const conn = await mysql.createConnection(config);
//     const [rows, fields] = await conn.execute(query);
//     await conn.end();
//   }
  
// module.exports = {
//     executeQuery
// }
