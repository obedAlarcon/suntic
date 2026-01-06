

const {models}=require('./../libs/sequelize');


class MaintService{


 constructor(){}

// se crea la tabla hace match con post del router
 async create(data){
    const newMaints = await models.Maint.create(data);
    return newMaints
 }
 //se traetos loa datos hace match con router.get('/')

   async find(){
      const maint = await models.Maint.findAll({
         include:['area','technicians']
      })
      return maint;
   }


   async findOne(id){
    // hace match con router.get('/:id')
    const maint = await models.Maint.findByPk(id)//buscar por pk(id)
    return maint;

   }

   
    async update(id, changes){
        const maint =await this.findOne(id);
       const response= await maint.update(changes);
       return response;
    }

   async delete(id){
   const maint = await this.findOne(id);
   await maint.destroy();
   return {id}
   }
}
 

module.exports= MaintService;