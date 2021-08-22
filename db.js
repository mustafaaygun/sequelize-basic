const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('B2B','root',null,{dialect:'mysql',logging: console.log})
module.exports = sequelize;