const boom = require('@hapi/boom');





const {models}=require('../libs/sequelize');

class TechniciansService{


constructor(){

}


async create(data){
   
    const newTechnicians = await models.Technicians.create(data);

    return newTechnicians;

}

    

async find(){
    const technicians = await models.Technicians.findAll({
       
         
    });
return technicians;
}

async findOne(id){
    const user = await models.Technicians.findByPk(id);
    if(!user){
         throw boom.notFount('technicians not fount');
    }

return  user;
}

async update(id, changes){
    const technicians = await this.findOne(id)
    const response = await technicians.update(changes);
    return response;

}
async delete(id){
    const model= await this.findOne(id);
    await model.destroy();
    return { response:true};

}




}
module.exports= TechniciansService;