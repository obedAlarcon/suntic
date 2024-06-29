

const express = require('express');


const validatorHandler = require('./../middlewares/validator.handler');

const TechniciansService = require('./../services/technicians.service');
const { getTechniciansSchema, createTechniciansSchema, updateTechniciansSchema } = require('../schemas/technicians.schema');


 const router = express.Router();
 const service = new TechniciansService();

  router.get('/',
  
    async (req, res, next)=>{
        try {
            res.json(await service.find());
        } catch (error) {
         next(error);
        }
    });


    router.get('/:id',

        validatorHandler(getTechniciansSchema, 'params'),
        async (req, res, next)=>{
            try {
                const {id}=req.params;
                const technicians = await service.findOne(id);
                res.json(technicians);
            } catch (error) {
                next(error);
            }
        });

         router.post('/',
            validatorHandler(createTechniciansSchema, 'body'),
            async (req, res, next)=>{
                try {
                    const body = req.body;
                    
                    const newTechnicians = await service.create(body);
                  
                    res.status(201).json(newTechnicians);
                } catch (error) {
                    next(error);
                }
            });

            router.patch('/:id',

                validatorHandler(getTechniciansSchema,'params'),
               validatorHandler(updateTechniciansSchema, 'body'),
               async (req, res,next)=>{
                  try {
                     const {id}=req.params;
                     const body = req.body;
                     const technicians= await service.update(id, body);
                     res.json(technicians);
                  } catch (error) {
                    next(error);
                  }
               });


               router.delete('/:id',
                  validatorHandler(getTechniciansSchema, 'params'),
                  async (req, res, next)=>{
                    try {
                       const {id}=req.params;
                       
                       res.status(200).json(await service.delete(id));
                    } catch (error) {
                        next(error);
                    }
                  });

                  module.exports= router;