const express = require('express');
const AreaService =require('./../services/area.service');
const {createAreaSchema, updateAreaSchema, getAreaSchema}=require('./../schemas/areas.schema');
const validatorHandler=require('./../middlewares/validator.handler');


const router =express.Router();
const service = new AreaService();


router.get('/',
    async(req,res,next)=>{
        try {
            const areas=await service.find();
            res.json(areas);
        } catch (error) {
            next(error);
        }
    });

    router.get('/:id',
        validatorHandler(getAreaSchema, 'params'),
        async(req,res,next)=>{
            try {
                const {id}=req.params;
                const area = await service.findOne(id);
                res.json(area);
                
            } catch (error) {
             next(error);
            }
        });


        router.post('/',

              validatorHandler(createAreaSchema,'body'),
              async(req,res,next)=>{
                try {
                    const body = req.body;
                    const newArea = await service.create(body);
                    res.status(201).json(newArea);
                     } catch (error) {
                    next(error);
                }
              });

              router.patch('/:id',
                validatorHandler(getAreaSchema,'params'),
                validatorHandler(updateAreaSchema,'body'),
                async (req,res,next)=>{
                    try {
                        const {id}=req.params;
                        const body=req.body;
                        const area= await service.update(id,body);
                        res.json(area);
                    } catch (error) {
                        next(error);
                    }
                });

                router.delete('/:id',
                    validatorHandler(getAreaSchema,'params'),
                    async(req,res,next)=>{
                        try {
                            const {id}=req.params;
                            await service.delete(id);
                            res.status(201).json({id});
                        } catch (error) {
                            next(error);
                        }
                    });


                    module.exports=router;