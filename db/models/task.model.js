
const { Model, DataTypes, Sequelize } = require("sequelize");
const { TECHNICIANS_TABLE } = require("./technicians.model");



const TASK_TABLE = 'tasks';
const TaskSchema ={

   id:{
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
   },

todo:{
    allowNull:false,
    type:DataTypes.STRING
   },
doing:{
    allowNull:false,
    type:DataTypes.STRING
   },

   done:{
    allowNull:false,
    type:DataTypes.STRING
   },
   techniciansId:{
    field:'technicians_id',
    allowNull:false,
    type:DataTypes.INTEGER,
    references:{
      model:TECHNICIANS_TABLE,
      key:'id',
    },
    onUpdate:'CASCADE',
    onDelete:' SET NULL'
   },



   
   createdAt:{
    allowNull:false,
    type:DataTypes.DATE,
    filed:'created_at',
    defaultValue: Sequelize.NOW
   }
   }
  
   class Task extends Model {
    static associate(models){
        this.belongsTo(models.Technicians,{
        as: 'technicians',
          
        })
    }


    static config(sequelize){
     return {
        sequelize,
        tableName :TASK_TABLE,
        modelName :'Task',
        timestamps:false,
     }

    }

   }


module.exports = {TASK_TABLE, TaskSchema, Task}