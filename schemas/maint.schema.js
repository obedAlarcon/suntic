

const Joi = require('joi');


const id =Joi.number().integer();
const description = Joi.string();
const areaId =Joi.number().integer();
const bossName=Joi.string();
const techniciansId=Joi.number().integer();
const techniciansDos=Joi.string();




const createMaintSchema=Joi.object({
    description:description.required(),
    areaId:areaId.required(),
    bossName:bossName.required(),
    techniciansId:techniciansId.required(),
    techniciansDos:techniciansDos.required(),
    
})

const updateMaintSchema=Joi.object({
   description,
   areaId,
   bossName,
   techniciansId,
   techniciansDos
})

const getMaintSchema=Joi.object({
    id:id.required()
})

module.exports={createMaintSchema, updateMaintSchema,getMaintSchema};