

const Joi = require('joi');

const id =Joi.number().integer();
const image=Joi.string();
const name = Joi.string();
const description=Joi.string();
const amount=Joi.number().integer();
const techniciansId = Joi.number().integer();


const createToolSchema=Joi.object({
    image:image.required(),
    name:name.required(),
    description:description.required(),
    amount:amount.required(),
    techniciansId:techniciansId.required(),
})

const updateToolSchema=Joi.object({
    image,
    name,
      description,
    amount,
    techniciansId,
})

const getToolSchema=Joi.object({
id:id.required(),
})

module.exports={createToolSchema, updateToolSchema,getToolSchema};