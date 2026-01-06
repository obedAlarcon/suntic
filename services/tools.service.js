

const {models}=require('./../libs/sequelize');

class ToolService{

    
     async create(data){
        const newTool = await models.Tool.create(data)
        return newTool;
     }


    async find(){
        const tool = await models.Tool.findAll({
         include:['technicians']
        });
        

        return tool;
    }


     async findOne(id){
        const tool= await models.Tool.findByPk(id);
        return tool;
     }
   
    async update(id, changes){
      
        const tool =await this.findOne(id);
        const response= await tool.update(changes);
        return response;
    }
  async delete(id){
    const tool = await this.findOne(id);
    await tool.destroy();
    return{id};
  }

}

module.exports=ToolService;