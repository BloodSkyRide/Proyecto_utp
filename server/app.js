import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import rutas from './routes/routes.js'



const app = express();
app.use( cors());

app.use(express.json());

app.use('/articles', rutas);

try {
     await db.authenticate();
     console.log('conexion exitosamente realizada!!!!!');
} catch (error) {
    
    console.log('El error de la conexion es: '+error);
}

app.get('/', (req,res)=>{

    res.send('HOLA MUNDO!');

});


app.listen(8001, () => {


    console.log('server UP  running in http://localhost:8001');
});