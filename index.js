const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {checkApiKey}=require('./middlewares/auth.handler');
const {logErrors,errorHandler,ormErrorHandler}=require('./middlewares/error.handler')
const swaggerDoc = require('./swagger.json');
const app = express();
 const port = process.env. PORT || 3000;
 app.use(express.json());

 const whitelist =['http://localhost:8080', 'http://suntic.co'];


 const options ={
    origen: (origen, callback)=>{
        if(whitelist.includes(origen)|| !origen){
            callback(null, true);

        }else{
            callback(new Error('no permitido'));
        }
    }

 }
 app.use(cors(options));



  //require ('./utils/');

  app.get('/', (req, res)=>{
    res.send('hola este es el servodor de suntic ');
  })
app.get('/nueva-ruta',(req, res) => {
    res.send('hola soy la nueva ruta');
})


app.get('/',(req, res)=>{
    res.send('hola mi servidor de express');

})
 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
//app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`Aplicacion corriendo en el puerto ${port}`);
})