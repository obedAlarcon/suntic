
const express = require('express');

 const validatorHandler=require('./../middlewares/validator.handler');
const {getToolSchema,createToolSchema,updateToolSchema}=require('./../schemas/tool.schema');
const ToolService=require('./../services/tools.service');

const router = express.Router();
const service = new ToolService();

router.get('/',
    async ( req,res,next)=>{
        try {
        const tools =await service.find();
        res.json(tools);
        } catch (error) {
            next(error);
        }
    });

    router.get('/:id',
        validatorHandler(getToolSchema,'params'),
        async (req,res,next)=>{
            try {
                const {id}=req.params;
                const tool = await service.findOne(id);
                res.json(tool);
            } catch (error) {
              next(error);
            }
        });

        router.post('/',
          
            validatorHandler(createToolSchema,'body'),
            async ( req,res,next)=>{
                try {
                    const body=req.body;
                    const newTool = await service.create(body);
                    res.status(201).json(newTool);
                } catch (error) {
                    next(error);
                }  
             
            });

            router.patch('/:id',
                validatorHandler(getToolSchema,'params'),
                validatorHandler(updateToolSchema,'body'),
                async ( req,res,next)=>{
                    try {
                         const {id}=req.params;
                         const body= req.body;
                         const tool = await  service.update(id,body);
                         res.json(tool);
                    } catch (error) {
                        next(error);
                    }
                });


                router.delete('/:id',
                    validatorHandler(getToolSchema,'params'),
                    async( req,res,next)=>{
                        try {
                            const {id}=req.params;
                            const tool= await service.delete(id);
                            res.status(201).json({id});
                        } catch (error) {
                            next(error);
                        }
                    });

                    module.exports=router;

