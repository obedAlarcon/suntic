

const Joi = require('joi');
const id = Joi.number().integer();
const name= Joi.string();
const post=Joi.string();

const createBossSchema=Joi.object({
    name:name.required(),
    post:post.required(),


});

const updateBossSchema=Joi.object({
    name:name,
    post:post,
});


const getBossSchema=Joi.required({
    id:id.required(),
});

module.exports={createBossSchema, updateBossSchema, getBossSchema};