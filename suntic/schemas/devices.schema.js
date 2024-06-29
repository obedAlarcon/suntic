

const Joi = require('joi');


const id =Joi.number().integer();
const name = Joi.string();
const ip= Joi.string().ip()
const mac = Joi.string();
const series=Joi.string();
const manufactoring =Joi.date();
const code=Joi.string();
const location=Joi.string();
const asset =Joi.number().integer();
const images=Joi.string();
const areaId=Joi.number().integer();


const createDeviceSchema=Joi.object({
     
    name:name.required(),
    ip:ip.required(),
    mac:mac.required(),
    series:series.required(),
    manufactoring:manufactoring.required(),
    code:code.required(),
    location:location.required(),
    asset:asset.required(),
    images:images.required(),
    areaId:areaId.required(),


});


const updateDeviceSchema=Joi.object({
    name:name,
    ip:ip,
    mac:mac,
    series:series,
    manufactoring:manufactoring,
    code:code,
    location:location,
    asset:asset,
    images:images,
    areaId:areaId,
});


const getDeviceSchema=Joi.object({
    id:id.required(),
})


module.exports={createDeviceSchema, updateDeviceSchema,getDeviceSchema}