const boom =require('@hapi/boom');
const {models}=require('../libs/sequelize');

class CustomerService{
    constructor(){}

    async find(){
        const response = await models.Customer.findAll({
            include:['user'] // aqui se hace la relacion con la tabñla user
        });
        return response;
    }
   async findOne(id){
    const customer = await models.Customer.findByPk(id);
    if(!customer){
        throw boom.notFound('Customer not found');

    }
    return user;
   }
    async create(data){
        //crea primeri el user con toda la data
     
        const newCustomer=await models.Customer.create(data,{
          include:['user']
          
        });
        return newCustomer;
    }

    async update(id){
        const model = await this.findOne(id);
        const response = await model.update(changes);
        return response;
    }

    async delete(id){
          const model= await this.findOne(id);
          await model.destroy();
          return { response:true};
    }
}
module.exports=CustomerService;