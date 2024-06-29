const {models}=require('./../libs/sequelize');

class BossService{

constructor(){}



async create(data){
    const newBoss = await models.Boss.create(data);
    return newBoss;

}
async find(){
  const bosses =await  models.Boss.findAll();
    return bosses;
}

async findOne(id){
    const boss= await models.findByPk(id);
    if(!boss){
         throw Boom.notFount('Boss not fount');
    }
    return boss;
}
async update(id, changes){
    const boss= await this.findOne(id);
    const response = await boss.update(changes);
    return response;

}
async delete(id){
    const boss= await this.findOne(id);
    await boss.destroy();
    return {id};

}



}
module.exports = BossService;