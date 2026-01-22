

const Joi = require('joi');

const id =Joi.number().integer();
const name =Joi.string();
const lastName =Joi.string();
const phone =Joi.string();
const userId = Joi.number().integer();
const email= Joi.string().email();
const password=Joi.string();



const createCustomerSchema = Joi.object({

    name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),

  })
 });


 const updateCustomerSchema = Joi.object({
    name:name,
    lastName:lastName,
    phone:phone,
    userId:userId,
 });

 const getCustomerSchema = Joi.object({
    id:id.required(),
 });
 module.exports={createCustomerSchema, updateCustomerSchema, getCustomerSchema};