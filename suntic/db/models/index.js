
const { User, UserSchema}=require('./user.model');
const {Technicians, TechniciansSchema}= require('./technicians.model');
const {Device, DeviceSchema}=require('./devices.model');
const {Area, AreaSchema}=require('./area.model');
const {Task, TaskSchema}=require('./task.model');
const {Tour, TourSchema}=require('./tours.model');
const {Boss, BossSchema}=require('./bosses.model');
const {Customer,CustomerSchema}=require('./customer.model');
const {Maint,MaintSchema}=require('./maint.model');
const { OrderMaint, OrderMaintSchema } = require('./order-maint.model');
const {Tool,ToolSchema}=require('./tool.model');





function setupModels(sequelize){
    User.init(UserSchema,User.config(sequelize));
    Technicians.init(TechniciansSchema,Technicians.config(sequelize));
        Device.init(DeviceSchema, Device.config(sequelize));
        Area.init(AreaSchema, Area.config(sequelize));
        Task.init(TaskSchema, Task.config(sequelize));
        Tour.init(TourSchema,Tour.config(sequelize));
        Boss.init(BossSchema,Boss.config(sequelize));       
       Customer.init(CustomerSchema,Customer.config(sequelize));
       Maint.init(MaintSchema,Maint.config(sequelize));
       OrderMaint.init(OrderMaintSchema,OrderMaint.config(sequelize));
       Tool.init(ToolSchema,Tool.config(sequelize));
        


    Technicians.associate(sequelize.models);
    User.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Area.associate(sequelize.models);
    Device.associate(sequelize.models);
    Task.associate(sequelize.models);
    Tour.associate(sequelize.models);
    Boss.associate(sequelize.models);
    Maint.associate(sequelize.models);  
    OrderMaint.associate(sequelize.models);
    Tool.associate(sequelize.models);
    


  }

module.exports = setupModels;