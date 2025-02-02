const express = require('express');

const validatorHandler = require('./../middlewares/validator.handler');
const UserService = require('../services/user.service');
const { getUserSchema, updateUserSchema } = require('../schemas/technicians.schema');

const router = express.Router();
const service =new UserService();

router.get('/', async (req,res,next)=>{
    try {
       const users = await service.find();
       res.json(users); 
    } catch (error) {
        next(error);
    }
})

router.get('/:id',
   
    async ( req, res, next)=>{
        try {
            const {id }=req.params;
            const users = await service.findOne(id);
            res.json(users);
        } catch (error) {
            next(error)
        }
    }

);

router.post('/',

   // validatorHandler(createUserSchema, 'body'),
 async (req, res, next)=>{
    try {
        const body = req.body;
        const newUser = await service.create(body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}
)


router.patch('/:id',
      validatorHandler(getUserSchema,'params'),
      validatorHandler(updateUserSchema,'body'),    
    async (req, res, next)=>{
    
    try {
  
        const {id}=req.params;
        const body=req.body;
        const users = await service.update(id, body);
        res.json(users);

        
    } catch (error) {
        next(error);
    }  

  }

)


router.delete('/:id',

async (req, res, next)=>{
    try {
        const {id}= req.params;
        await service.delete(id);
        res.status(201).json({id});
    } catch (error) {
        next(error);
    }
}
)

module.exports=router