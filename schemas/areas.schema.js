const Joi = require('joi');

const id = Joi.number().integer();
const name =Joi.string();


const createAreaSchema=Joi.object({
    name:name.required(),
    
    
});

const updateAreaSchema=Joi.object({
    name,
    

});

const getAreaSchema=Joi.object({
    id:id.required(),
})

module.exports={createAreaSchema,updateAreaSchema,getAreaSchema};