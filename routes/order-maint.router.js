
const express = require('express');
const validatorHandler=require('./../middlewares/validator.handler');
const OrderMaintService=require('./../services/order-maint.service');
const { getOrderMaintSchema,createOrderMaintSchema, updateOrderMaintSchema }=require('./../schemas/order-maint.schema');


 const router =express.Router();
 const service = new OrderMaintService();


 router.get('/',
    async ( req,res,next)=>{
        try {
            const orderMaint= await service.find()
            res.json(orderMaint);
        } catch (error) {
            next(error);
        }
    });


    router.get('/:id',
        validatorHandler(getOrderMaintSchema,'params'),
        async(req,res,next)=>{
            try {
                const {id}=req.params;
                const orderMaint = await service.findOne(id);
                res.json(orderMaint);
                
            } catch (error) {
                
            }
        });

        router.post('/',
            validatorHandler(createOrderMaintSchema,'body'),
            async (req,res,next)=>{
                try {
                   const body = req.body;
                   const newOrderMaint = await service.create(body);
                   res.status(201).json(newOrderMaint);
                } catch (error) {
                    next(error);
            }
        });


        router.patch('/:id',
            validatorHandler(getOrderMaintSchema,'paramas'),
            validatorHandler(updateOrderMaintSchema, 'body'),
            async ( req,res,next)=>{
                try {
                    const {id}=req.params;
                    const body=req.body;
                    const orderMaint= await service.update(id,body);
                    res.json(orderMaint);
                    
                } catch (error) {
                    next(error);
                }
            });


            router.delete('/:id',
                validatorHandler(getOrderMaintSchema,'params'),
                async (req,res,next)=>{
                    try {

                        const {id}=req.params;
                        res.status(200).json(await service.delete(id));
                        
                    } catch (error) {
                        next(error);
                    }
                });

    module.exports=router;