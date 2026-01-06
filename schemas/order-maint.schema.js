

const Joi = require('joi');

const id=Joi.number().integer();
const techniciansId=Joi.number().integer();
const maintId=Joi.number().integer();
const amount =Joi.number().integer();

 const createOrderMaintSchema=Joi.object({
    techniciansId:techniciansId.required(),
    maintId:maintId.required(),
    amount:amount.required(),
 })

 const updateOrderMaintSchema=Joi.object({
    techniciansId:techniciansId,
    maintId:maintId,
    amount:amount
 })
 const getOrderMaintSchema=Joi.object({
    id:id.required()
 })

 module.exports={createOrderMaintSchema,updateOrderMaintSchema,getOrderMaintSchema}