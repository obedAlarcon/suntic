const { type } = require("os");
const { Model, DataTypes, Sequelize } = require("sequelize");







const TECHNICIANS_TABLE = 'technicians';
const TechniciansSchema ={


  id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  
  fullName:{
    allowNull:false,
    type:DataTypes.STRING
  },
 
  phone:{
    allowNull:false,
    type:DataTypes.STRING
  },
  
  image:{
      allowNull:false,
      type:DataTypes.STRING
  },
 
  createAt:{
       field:'create_at',
       allowNull:false,
       type:DataTypes.DATE,
       defaultValue:Sequelize.NOW
  },



}

class Technicians extends Model{
  static associate(models){
    
  
  this.hasMany(models.Maint,{as:'maints',foreignKey:'techniciansId'});
  this.hasMany(models.Tool,{as:'tools',foreignKey:'techniciansId'})
       
  }

  static config(sequelize){
     return {
      sequelize,
      tableName:TECHNICIANS_TABLE,
      modelName:'Technicians',
      timestamps:false,
     }
  }
}

module.exports={TECHNICIANS_TABLE, TechniciansSchema,Technicians}