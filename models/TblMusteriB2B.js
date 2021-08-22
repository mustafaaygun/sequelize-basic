const {DataTypes, Model} = require('sequelize');
const DB = require('../db');
class TBLMUSTERIB2B extends Model {}
TBLMUSTERIB2B.init({
    LNGKOD:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },LNGMUSTERIKOD:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false
    },TXTPASSWORD: {
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize: DB,
    tableName:'TBLMUSTERIB2B'
});

module.exports = {TBLMUSTERIB2B};