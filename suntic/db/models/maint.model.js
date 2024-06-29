  
  const { type } = require('os');
const {Model,DataTypes,Sequelize}=require('sequelize');

const { AREA_TABLE } = require('./area.model');
const { TECHNICIANS_TABLE } = require('./technicians.model');



  const MAINT_TABLE = 'maints'

  const MaintSchema={
        
   id:{
    allowNull:false,
    primaryKey:true,
    autoIncrement:true,
    type:DataTypes.INTEGER

   },

   description:{
    allowNull:false,
    type:DataTypes.STRING,
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
     techniciansId:{
      field:'technicians_id',
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
         model:TECHNICIANS_TABLE,
         key:'id'
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL',
     },
     techniciansDos:{
           field:'technicians_dos',
           allowNull:false,
           type:DataTypes.STRING
     },
   bossName:{
      field:'boss_name',
    allowNull:false,
    type:DataTypes.STRING,
   

   },
 

   createdAt:{
    field:'creted_at',
    allowNull:false,
    type:DataTypes.DATE,
    defaultValue:Sequelize.NOW

   }

  }

  class Maint extends Model{
     static associate(models){
      this.belongsTo(models.Area, { as: 'area'});
      this.belongsTo(models.Technicians,{as:'technicians'})
 
      
     }
   static config(sequelize){
      return {
        sequelize,
        tableName:MAINT_TABLE,
        modelName:'Maint',
        timestamps:false,
      }   

   }

  }
  module.exports={MAINT_TABLE,Maint,MaintSchema};