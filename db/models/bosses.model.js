const { type } = require("os");
const {Model,DataTypes, Sequelize } = require("sequelize");



const BOSS_TABLE =' bosses';
const BossSchema ={

    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER

    },

    name:{
      allowNull:false,
      type:DataTypes.STRING

    },
   post:{
        allowNull:false,
        type:DataTypes.STRING

    },
    createdAt:{
        fild:'created_at',
        allowNull:false,
        type:DataTypes.DATE,
        defaultValue:Sequelize.NOW,

    }
}
class Boss extends Model{
    static associate(models){
       this.hasMany(models.Tour,
        {
            as:'tours',
            foreignKey:'bossesId'
        })

        
    }


    static config(sequelize){
        return{
            sequelize,
            tableName:BOSS_TABLE,
            modelName:'Boss',
            timestamps:false,
        }
    }
}

module.exports={BOSS_TABLE,BossSchema, Boss}