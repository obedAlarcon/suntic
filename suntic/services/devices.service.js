
const boom = require('@hapi/boom');

const { models}=require('../libs/sequelize');


 class DevicesService {
    constructor(){
        this.devices=[];
    }


    async create(data){
        const newDevice = await models.Device.create(data);
        return newDevice;
    }


    async find(){
        const devices = await models.Device.findAll({
            include:['area'],
        });
        return devices;
    }


     async findOne(id){
        const device = await models.Device.findByPk(id);
        return device;

     }
   

     async update(id, changes){
        const device = await this.findOne(id);
        const response= await device.update(changes);
        return response;

     }


     async delete(id){
        const device = await this.findOne(id);
        await device.destroy();
        return {id};
        
     }
     
    
 }

 module.exports = DevicesService;