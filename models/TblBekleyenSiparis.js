const DB = require('../db');
const {DataTypes, Model} = require('sequelize');
class TBLBEKLEYENSIPARIS  extends Model {}
TBLBEKLEYENSIPARIS.init({
    LNGSIPARISKOD:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        autoIncrement:true,
        primaryKey: true
    }, LNGURUNKOD:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }, DBLMIKTAR:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
},{
    sequelize: DB,
    tableName: 'TBLBEKLEYENSIPARIS'
});