const { type } = require("os")
const { TECHNICIANS_TABLE } = require("./technicians.model")
const {Model, DataTypes, Sequelize } = require("sequelize")
const { MAINT_TABLE } = require("./maint.model")


    
       const ORDER_MAINT_TABLE = 'order_maint'

    const OrderMaintSchema={
            id:{
                allowNull:false,
                primaryKey:true,
                autoIncrement:true,
                type:DataTypes.INTEGER,
            },
            maintId:{
                 field:'maint_id',
                 allowNull:false,
                 type:DataTypes.INTEGER,
                 references:{
                    model:MAINT_TABLE,
                    key:'id'
                 },
                 onUpdate:'CASCADE',
                 onDelete:' SET NULL'
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
            amount:{
                allowNull:false,
                type:DataTypes.INTEGER,

            },

            createdAt:{
               field:'created_at',
               type:DataTypes.DATE,
               defaultValue:Sequelize.NOW
            }
    }

    class OrderMaint extends Model{
        static associate(models){
          this.belongsTo(models.Technicians,{
            as:'technicians'
          })
         this.belongsToMany(models.Maint,{
            through:models.OrderMaint,
            foreignKey:'orderMaintId',
            otherKey:'maintId'
         })
         

        }

        static config(sequelize){
            return {
                sequelize,
                tableName:ORDER_MAINT_TABLE,
                modelName:'OrderMaint',
                 timestamps:false
            }
        }
    }
    module.exports={OrderMaintSchema,OrderMaint,ORDER_MAINT_TABLE}