import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mysql = require('./node_modules/mysql');

//conexion
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'db_informe4',
    user: 'root',
    password: '',
});

//iniciar la conexion 
connection.connect((error)=>{
    if(error){
        console.log('Hubo un error');
        console.log(error);
        return;
    }
    console.log('Conexion Exitosa');
});

//Ingresando nuevos datos a la base de datos
let name = '';
let lastname = '';
let edad = '';
let sql_insert = `INSERT INTO estudiantes (name, lastname, edad) VALUES('${name}','${lastname}', ${edad});`;

connection.query(sql_insert, (err, result, fields)=>{
    if(err){
        console.log(`Hubo un error ${err}`);
        return;
    }
    console.log(result);
});

//Ver los datos/tablas
const sql_selection = `SELECT * FROM estudiantes;`;
connection.query(sql_selection, (err, result, fields)=>{
    if(err){
        console.log(`Hubo un error ${err}`);
        return;
    }
    console.log(result);
});


// Es buena práctica terminar la conexion
connection.end();