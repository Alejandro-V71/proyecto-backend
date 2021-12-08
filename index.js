import express from 'express'
// import heroes from './heroes.js'
// import _ from 'lodash'
import rutas from './rutas/rutas.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//Crear objeto Express
const app = express()

//Configuracion de Conexion
mongoose.connect('mongodb://localhost/motocicletas',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

//Configurar bodyParser: para JSON exclusivamente
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Utilizar el archivo de rutas
rutas(app)

// //Crear Rutas
// app.get('/heroes', (request, response) => {
//     response.send(heroes)
// })

// app.get('/heroes/:nombre', (request, response) => {
//     //Almacenar el heroe extraido desde el arreglo
//     let h = _.find(heroes, { nombre: request.params.nombre })
//     //Enviar respuesta al Cliente
//     response.send(h)
// })

//Crear y Ejecutar Servidor
app.listen(7000, function () {
    console.log('Servidor Inicializado en puerto 7000')
})

