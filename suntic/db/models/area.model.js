
const {Model, DataTypes, Sequelize } = require("sequelize");



const AREA_TABLE = 'areas';
const AreaSchema ={
    id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        allowNull:false,
        type:DataTypes.STRING,
    },
   
    createdAt:{
        allowNull:false,
        field:'create_at',
        type:DataTypes.DATE,
        defaultValue:Sequelize.NOW

    }
}
class Area extends Model{
    static associate(models){
        this.hasMany(models.Device,{
            as:'devices',
            foreignKey:'areaId',
        })
        this.hasMany(models.Tour,
            {
                as:'tours',
                foreignKey:'areaId'
            })
           
            this.hasMany(models.Maint,{as:'maints',foreignKey:'areaId'})
       
      

    }

    static config(sequelize){
        return{
            sequelize,
            tableName:AREA_TABLE,
            modelName:'Area',
            timestamps:false
        }
    }
}
module.exports={Area,AREA_TABLE,AreaSchema}