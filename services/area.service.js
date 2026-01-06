 const boom=require('@hapi/boom')
const {models}=require('./../libs/sequelize');
const {Devices}=require('../db/models/devices.model');





class AreaService{

    constructor(){

    }



    async find() {
 
        // const query= 'SELECT * FROM users';
        const areas = await models.Area.findAll();
        return areas;
        
       }
        
      async findOne(id) {
        const area= await models.Area.findByPk(id,{
                 include:['devices']
        });
       return area;
       
        
        // devuelve todo los producr¿tos relacionados a esta ca
      }
    
      async create(data) {
    
        const newArea= await models.Area.create(data,{
          include:['devices']
        });
        return newArea;
        // esta es la creacion de la categoria
      }
    
       async update(id, changes) {
      
        const area= await this.findOne(id);
        const response= await area.update(changes);
        return response;
        
      }
    



      async delete(id) {
        const area =await this.findOne(id);
       await area.destroy();
        return { id };
      }
   


}
module.exports=AreaService;