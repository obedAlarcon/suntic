

const { allow } = require('joi');
const { types } = require('pg');
const {Model, Sequelize, DataTypes, NUMBER}= require('sequelize');


const CUSTOMER_TABLE ='customer';
const CustomerSchema={
    id:{
        allowNull:false,
        autoIncrement:true,
        type:DataTypes. INTEGER,
        primaryKey:true,

    },
    name:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    lastName:{
        allowNull:false,
        type:DataTypes.STRING,
    },
    phone:{
        allowNull:false,
        type:DataTypes.STRING
    },
    userId:{
        allowNull:false,
        type:DataTypes.INTEGER,
        field:'user_id',
    },
    email:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        allowNull:false,
        type:DataTypes.STRING
    },

  

    createdAt:{
        field:'created_at',
        allowNull:false,
        type:DataTypes.DATE,
        defaultValue:Sequelize.NOW
    },

}

class Customer extends Model{
    static associate(models){

          this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId',
      

    });
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:CUSTOMER_TABLE,
            modelName:'Customer',
            timestamps:false
        }
    }
}

module.exports={
    Customer,
    CUSTOMER_TABLE,
    CustomerSchema
}