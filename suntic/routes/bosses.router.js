
const express = require('express');
const { createBossSchema, getBossSchema, updateBossSchema } = require('../schemas/bosses.schema');
const BossService=require('./../services/bosses.service');
 const validatorHandler=require('./../middlewares/validator.handler');
const router = express.Router();
const service = new BossService();

router.get('/',

    async(req,res,next)=>{
        try {
            const boss= await service.find();
            res.json(boss);
        } catch (error) {
            next(error);
        }
    });

    router.get('/:id',
        validatorHandler(getBossSchema, 'params'),
        async (req,res,next)=>{
          try {
           const {id}=req.params;
           const boss=await service.findOne(id);
           res.json(boss);
          } catch (error) {
            next(error);

          }


        });


        router.post('/',
            validatorHandler(createBossSchema, 'body'),
            async ( req,res,next)=>{
                try {
                    const body=req.body;
                    const newBoss= await service.create(body);
                    res.status(201).json(newBoss);
                } catch (error) {
                 next(error);
                }
            });


            router.patch('/:id',
                validatorHandler(getBossSchema, 'params'),
                validatorHandler(updateBossSchema,'body'),

                async (req,res,next)=>{
                    try {
                        const {id}=req.params;
                        const body = req.body;
                        const boss= await service.update(id,body);
                        res.json(boss);
                    } catch (error) {
                        next(error);
                    }
                });

                router.delete('/:id',
            validatorHandler(getBossSchema, 'params'),
              async ( req,res,next)=>{
                  try {
                    const {id}=req.params;
                    const boss = await service.delete({id});
                    res.status(201).json(boss);
                  } catch (error) {
                    
                  }
              });


              module.exports=router;

