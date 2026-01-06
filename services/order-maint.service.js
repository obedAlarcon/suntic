
const {models}=require('./../libs/sequelize');



class OrderMaintService{


constructor(){

}
  // hace match con router.post()
    async create(data){
      const newOrderMaint  = await models.OrderMaint.create(data,{
        
      })
      
      
      return newOrderMaint;
    }


async findByTechbiciasn(technicians_id){
    // hace match con router.get y trae todo
    const orderMaint = await models.OrderMaint.findAll({
      where:{
           '$technicicnas.maint.id$':techniciansId
      },
      include:[
        {
          association:'technicians',
          include:['maint']
        }
      ]
    });
    return orderMaint;
}


 async findOne(id){
    //hace match con router.get('/:id')
    const orderMaint= await models.OrderMaint.findByPk(id,{
      include:[
        {association:'technicians',
        include:['maint']
      },
    ]
    });

    return orderMaint;
 }

   async update(id,changes){
// hace match con router.patch()
const orderMaint= await this.findOne(id);
const response=await orderMaint.update(changes);
return response;
   }
 

  async delete(id){
    const orderMaint=await this.findOne(id);
    await orderMaint.destroy();
    return{id};
  }


}
module.exports=OrderMaintService;