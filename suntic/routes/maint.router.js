

const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');

const MaintService= require('./../services/maint.Service');
const {createMaintSchema,updateMaintSchema, getMaintSchema}=require('./../schemas/maint.schema');

const router = express.Router();

const service = new MaintService();

  

router.get('/',


    async (req,res,next)=>{
        try {
            const maint = await service.find();
          res.json(maint);
            
        } catch (error) {
            next(error);
        }
    });

    router.get('/:id',
        validatorHandler(getMaintSchema,'params'),
        async(req,res,next)=>{
            try {
                const {id}=req.params;
                const maint=await service.findOne(id);
                res.json(maint);
            } catch (error) {
                next(error);
            }
        });


        router.post('/',
            validatorHandler(createMaintSchema,'body'),
            async(req,res,next)=>{
                try {
                    const body = req.body;
                    const newMaints = await service.create(body);
                    res.status(201).json(newMaints);
                } catch (error) {
                    next(error);
                }
            });


                  

            router.patch('/:id',
                validatorHandler(getMaintSchema,'paramas'),
                validatorHandler(updateMaintSchema, 'body'),
                      async (req,res,next)=>{
                        try {
                            const {id}=req.params;
                            const body=req.body;
                            const maint = await service.update(id,body);
                            res.json(maint);
                        } catch (error) {
                            next(error);
                        }
                      });
    

                router.delete('/:id',
                    validatorHandler(getMaintSchema,'params'),
                    async(req,res,next)=>{
                        try {
                             const {id}=req.params;
                           res.status(200).json(await service.delete(id))
                        } catch (error) {
                            next(error);
                        }
                    });
                    module.exports=router;