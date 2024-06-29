const express = require('express');



const techniciansRouter = require('./technicians.router');
const usersRouter = require('./users.router');
const devicesRouter = require('./devices.router');
const areasRouter = require('./areas.router');
const tasksRouter = require('./tasks.router');
const toursRouter = require('./tours.router');
const bossesRouter = require('./bosses.router');
const customersRouter=require('./customer.router');
const maintRouter= require('./maint.router');
const orderMaintRouter=require('./order-maint.router');
const toolsRouter=require('./tools.router');



function routerApí(app){
    const router = express.Router();
    app.use('/api/v1/', router);
    router.use('/technicians',techniciansRouter);
    router.use('/users',usersRouter);
    router.use('/devices',devicesRouter);
    router.use('/areas',areasRouter);
    router.use('/tasks',tasksRouter);
    router.use('/tours',toursRouter);
    router.use('/bosses',bossesRouter);
    router.use('/customers',customersRouter);
    router.use('/maints',maintRouter);
    router.use('/order_maint',orderMaintRouter);
    router.use('/tools',toolsRouter);
   
   
    
}

module.exports= routerApí;