
const express = require('express');
const DevicesService = require('./../services/devices.service');

const {createDeviceSchema,updateDeviceSchema, getDeviceSchema}=require('./../schemas/devices.schema');
const validatorHandler = require('../middlewares/validator.handler');


const router = express.Router();
const service = new DevicesService();

router.get('/',
    async ( req,res,next)=>{
        try {
         const devices= await service.find();
         res.json(devices);
        } catch (error) {
            next(error);
        }
    });


    router.get('/:id',
                 validatorHandler(getDeviceSchema,'params'),
           async(req,res,next)=>{
               try {
                const {id}=req.params;
                const device = await service.findOne(id);
                res.json(device);
               } catch (error) {
                  next(error);
               }
           });


    router.post('/',
        validatorHandler(createDeviceSchema, 'body'),
        async(req,res,next)=>{
            try {
                const body=req.body;
                const newDevice = await service.create(body);
                res.status(201).json(newDevice);
            } catch (error) {
                next(error);
            }
        });
        
        
router.patch('/:id',
    validatorHandler(getDeviceSchema, 'params'),
    validatorHandler(updateDeviceSchema,'body'),
    async(req,res,next)=>{
        try {
             const {id}=req.params;
             const body=req.body;
             const device =await service.update(id, body);
             res.json(device);
        } catch (error) {
          next(error);
        }
    });

    router.delete('/:id',
        validatorHandler(getDeviceSchema,'params'),
        async(req,res,next)=>{
            try {
                const {id}=req.params;
               const device = await service.delete(id)
                res.status(201).json({id});
            } catch (error) {
                next(error);
            }
        }
    )
    
  
module.exports=router;