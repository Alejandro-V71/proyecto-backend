import mongoose from "mongoose"

//Crear un objeto esquema mongo:Schema:
const Schema = mongoose.Schema

//Construir un esquema para motocicletas
const MotocicletaSchema = new Schema({

    marca: {
        type: String,
        required: 'Marca vacia'
    },
    categoria: {
        type: String,
        required: 'Categoria vacia'
    },
    linea: {
        type: String,
        required: 'Linea vacia'
    },
    modelo: {
        type: Number,
        required: 'Modelo vacio'
    },
    cilindraje: {
        type: Number,
        required: 'Cilindraje vacio'
    },
    color: {
        type: String,
        required: 'Color vacio'
    },
    placa: {
        type: String,
        required: 'Placa vacia'
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }
})

export default MotocicletaSchema