

const Joi = require('joi');

const id = Joi.number().integer();
const fullName = Joi.string();
const phone = Joi.string();
const image =Joi.string();





const createTechniciansSchema = Joi.object({



    fullName:fullName.required(),
    phone: phone.required(),   
    image:image.required(),

  

})


const getTechniciansSchema=Joi.object({
    id:id.required(),
});

const updateTechniciansSchema = Joi.object({
    fullName,
    phone,    
    image,
    
  
})


module.exports={createTechniciansSchema, getTechniciansSchema, updateTechniciansSchema}