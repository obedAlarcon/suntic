
const { Model, Sequelize, DataTypes}=require('sequelize');
const { AREA_TABLE } = require('./area.model');
const { type } = require('os');




const DEVICE_TABLE = 'devices';
const DeviceSchema ={

    id:{
       allowNull:false,
       autoIncrement:true,
       type:DataTypes.INTEGER,
       primaryKey:true,
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING
    },
    ip:{
         allowNull:false,
         type:DataTypes.INET,

    },
    mac:{
      allowNull:false,
      type:DataTypes.STRING,
    },
    series:{
        allowNull:false,
        type:DataTypes.STRING,

    },
    manufactoring:{
          allowNull:false,
          type:DataTypes.DATE,
    },
    
    asset:{
       allowNull:false,
       type:DataTypes.INTEGER
    },

    code:{
        allowNull:false,
        type:DataTypes.STRING,

    },
    location:{
        allowNull:false,
        type:DataTypes.STRING,

    },
   
    images:{
        allowNull:false,
        type:DataTypes.STRING
     },

      areaId:{
        field:'area_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:AREA_TABLE,
            key:'id'
        },

        onUpdate:'CASCADE',
        onDelete:'SET NULL',
     },

     createdAt:{
        field:'created_at',
        allowNull:false,
        type:DataTypes.DATE,
        defaultValue:Sequelize.NOW
     }
 
}

class Device extends Model{
    static associate(models){


        this.belongsTo(models.Area,{
            as:'area',
           
        })

    }

    static config(sequelize){
        return {
            sequelize,
            tableName:DEVICE_TABLE,
            modelName:'Device',
            timestamps:false
        }
    }
}



module.exports={Device, DeviceSchema, DEVICE_TABLE}