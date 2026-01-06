

const Joi = require('joi');

const id = Joi.number().integer();
const todo = Joi.string();
const doing= Joi.string();
const done = Joi.string();
const techniciansId =Joi.number().integer();


const createTaskSchema = Joi.object({
    todo:todo.required(),
    doing:doing.required(),
    done:done.required(),
    techniciansId:techniciansId.required(),

});


const updateTaskSchema =Joi.object({
    todo,
    doing,
    done,
    techniciansId:techniciansId,
});

const getTaskSchema= Joi.object({
    id:id.required(),
})

module.exports ={createTaskSchema, updateTaskSchema, getTaskSchema}