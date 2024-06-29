

const Joi = require('joi');

const id = Joi.number().integer();
const areaId =  Joi.number().integer();
const novelty = Joi.string().max(100);
const bossesId = Joi.number().integer();


const createTourSchema =Joi.object({
   areaId: areaId.required(),
   novelty: novelty.required(),
   bossesId: bossesId.required(),
   

});

const updateTourSchema =Joi.object({
    areaId: areaId,
    novelty:novelty,
    bossesId: bossesId,


});

const getTourSchema = Joi.object({
    id:id.required(),
})

module.exports ={createTourSchema, updateTourSchema, getTourSchema}