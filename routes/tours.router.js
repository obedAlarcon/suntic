const express = require('express');
const validatorHandler= require('./../middlewares/validator.handler')
const { getTourSchema, createTourSchema, updateTourSchema } = require('../schemas/tours.schema');
const TourService = require('./../services/tours.service');


const router = express.Router();
const service = new TourService();

router.get('/',
    async (req,res,next)=>{  

        try {
          const tours = await service.find();
          res.json(tours);  
        } catch (error) {
            next(error);
        }
    });

    router.get('/:id',

        validatorHandler(getTourSchema,'params'),
        async (req,res,next)=>{
            try {
                const {id}= req.params;
                const tours = await service.findOne(id);
                res.json(tours);
            } catch (error) {
                next(error);
            }
        });

        router.post('/',

            validatorHandler(createTourSchema, 'body'),

            async (req, res, next)=>{
                try {
                    const body =req.body;
                    const newTour = await service.create(body);
                    res.status(201).json(newTour);

                } catch (error) {
                    next(error);
                }
            });

            router.patch('/:id',
                validatorHandler(getTourSchema, 'params'),
                validatorHandler(updateTourSchema, 'body'),
                async (req, res, next)=>{
                    try {
                        const {id}=req.params;
                        const body=req.body;
                        const tour = await service.update(id, body);
                        res.json(tour);
                    } catch (error) {
                        next(error);
                    }
                });



                router.delete('/:id',
                       validatorHandler(getTourSchema, 'params'),
                       async (req, res, next)=>{
                        try {
                            const {id}= req.params;
                           const tour= await service.delete(id);
                            res.status(201).json({id})
                        } catch (error) {
                            next(error);
                        }
                       });

                       module.exports = router;