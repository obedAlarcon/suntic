
const boom=require('@hapi/boom');

const {models}=require('./../libs/sequelize')

class TourService {

constructor()
{

}

async create(data){

    const newTour = await models.Tour.create(data);
    return newTour;

}

async find(){
const tours = await models.Tour.findAll({
 include:['bosses','area'],

});

return tours;
}
async findOne(id){
    const tour= await models.Tour.findByPk(id);
    if(!tour){
      throw boom.notFound('tours not found');
    }
    return tour;

}




async update(id, changes){
  const tour =await this.findOne(id);
  const response= await tour.update(changes);
  return response;

}
async delete(id){
  const tour = await this.findOne(id);
  await tour.destroy();
   return {id}
}


}
module.exports = TourService;