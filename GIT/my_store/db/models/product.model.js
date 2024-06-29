



const { Model, DataTypes, Sequelize}=require('sequelize');


const {CATEGORY_TABLE}=require('./category.model');

 const PRODUCT_TABLE = 'products';

 const ProductSchema ={
    id:{
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        allowNull:false,
        type:DataTypes.TEXT
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    createdAt:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'created_at',
        defaultValue:Sequelize.NOW
    },
    // RELACION UNO A MUCHOS LA TABLA PRODUCT ES LA QUE CARGA COIN LA RELACION
    categoryId:{
        field:'category_id',
        allowNull:false,
        type:DataTypes.INTEGER,
        references:{
            model:CATEGORY_TABLE,
            key:'id',
        },
        onUpdate:'CASCADE',
        onDelete:'SET NULL'
    }
 }
  class Product extends Model {
    static associate(models){
        this.belongsTo(models.Category, { as:'category' });
        // aqui se relaciona con la tabla de cattegorias
        // esta es una relacion uno a muchos
    }

    static config(sequelize){
        return{
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps:false
        }
    }
  }

  module.exports={Product, ProductSchema, PRODUCT_TABLE};