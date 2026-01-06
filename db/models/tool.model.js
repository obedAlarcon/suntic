
const {Model,DataTypes, Sequelize } = require("sequelize")
const {  TECHNICIANS_TABLE } = require("./technicians.model")





  const TOOL_TABLE = 'tools'

  const ToolSchema={
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER,
    },
    image:{
        allowNull:false,
        type:DataTypes.STRING
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING
    },
    description:{
        allowNull:false,
        type:DataTypes.STRING
    },
    amount:{
        allowNull:false,
        type:DataTypes.INTEGER
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

   createdAt:{
      field:'created_at',
      allowNull:false,
      type:DataTypes.DATE,
      defaultValue:Sequelize.NOW
   }

  }


  class Tool extends Model{
    static associate(models){
        this.belongsTo(models.Technicians,{
            as: 'technicians',
              
            })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName:TOOL_TABLE,
            modelName:'Tool',
            timestamps:false
        }
    }
  }

  module.exports={TOOL_TABLE,ToolSchema,Tool};