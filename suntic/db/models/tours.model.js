const { type } = require("os");
const {Model, DataTypes, Sequelize } = require("sequelize");
const {AREA_TABLE}=require('./area.model');
const {BOSS_TABLE}=require('./bosses.model');




const TOUR_TABLE ='tours';
const TourSchema ={
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER

    },

    areaId:{
        field:'area_id',
        allowNull:false,
        type:   DataTypes.INTEGER,
        references:{
            model:AREA_TABLE,
            key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL',
    },
    novelty:{
          allowNull:false,
          type:DataTypes.STRING,
    },

    bossesId:{
        field:'bosses_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:BOSS_TABLE,
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

  class Tour extends Model{
    static associate(models){
        this.belongsTo(models.Boss, { as: 'bosses' });
        this.belongsTo(models.Area, { as: 'area' });
        
    }

   static config(sequelize){
       return{
        sequelize,
        tableName:TOUR_TABLE,
        modelName:'Tour',
        timestamps:false
       }
   }

  }
  

  module.exports={TOUR_TABLE,TourSchema,Tour}