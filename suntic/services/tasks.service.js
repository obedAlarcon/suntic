const boom = require("boom");
const {models}=require('./../libs/sequelize')

class TaskService{


constructor(){

}
 async create(data){
    const newTask = await models.Task.create(data);
    return newTask;
 }
 
 async find(){
    const tasks =await models.Task.findAll({
      include:['technicians']
    });
    return tasks;
 
 }

  async findOne(id){

    const task = await models.Task.findByPk(id);

    if(!task){
        throw boom.notFount('tasks not fount');
    }
  return task;
  }

 async update(id, changes){
   const task = await this.findOne(id);
   const response =await task.update(changes);
   return response;
 }

 async delete(id){

    const task = await this.findOne(id);
    await task.destroy();
    
    return {id};

 }




}
module.exports =TaskService;