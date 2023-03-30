import express from 'express'
//importar{QUE?} de donde? 'ruta'
import {test, estudiantes} from './students.js'
import cors from 'cors'
import bodyParser from 'body-parser'



const app = express();
//Aceptar peticiones de la misma computadora como ambas van a estar en localhost
app.use(cors({
    //todos los origenes '*'
    origin: '*'
}));

//Que pueda aceptar request tipo json
app.use(bodyParser.json());

//(Puerto = 5000, llamará un callback funtion -- para sarber si el servido inico)
app.listen(5000, ()=>{
    console.log('El servidor ha iniciado');
});

//END-POINTS

app.post('/', (req, res)=>{
    console.log(req.body)
    estudiantes.push(req.body)
    res.json(estudiantes);
    res.end();
})

//toda callback funtion de express tiene estos dos parametros (REQuest, RESponds)
app.get('/', (req, res)=>{
    res.end('<h1>Hello World</h1>');
    //la linea de arriba es equivalente a hacer los siguiente:
    //res.send('<h1>Hello World</h1>');
    //res.end();
});

app.get('/about', (req, res)=>{
    res.end('<h1>Sobre nosotros</h1>');

});

app.get('/estudiantes', (req, res)=>{
    //1) se manda una respuesta de tipo json:
    res.json(estudiantes);
    //
    res.end();
})

//all() --> ABARCA TODO LOS METODOS
//          get();post();put();delete();update()
//Aplicarlo para todas las rutas
app.all('*', (req, res)=>{
    //404 -> error
    res.status(404).send('<h1>Página no disponible</h1>');
})






//app.post();