import mongoose from "mongoose"
import MotocicletaSchema from "../modelos/MotocicletaModel.js";

//Objeto creado a partir del Schema Contacto
const Motocicleta = mongoose.model('Motocicleta', MotocicletaSchema)

//Accion de añadir Nuevo Contacto
export const addMotocicleta = (request, response) => {
    //Nuevo objeto basado en el DAO
    let nuevaMotocicleta = new Motocicleta(request.body)
    //Guardar Contacto
    nuevaMotocicleta.save((error, motocicleta) => {
        if (error)
            response.send(`Error detectado: ${error}`)
        else {
            response.json(motocicleta)
        }
    })
}

//Accion para obtener todas las personas
export const getMotocicletas = (request, response) => {
    Motocicleta.find({}, (error, motocicletas) => {
        if (error) {
            response.send(error)
        } else {
            response.json(motocicletas)
        }
    })
}

//Accion detalles de Contacto
export const getMotocicletaById = (request, response) => {
    Motocicleta.findById(request.params.motocicletaid, (error, contacto) => {
        if (error) {
            response.send(error)
        } else {
            response.json(motocicleta)
        }
    })
}

//Accion para Eliminar Contacto
export const deleteMotocicleta = (request, response) => {
    Motocicleta.deleteOne({ _id: request.params.motocicletaid }, (error, motocicleta_borrada) => {
        if (error) {
            response.send(error)
        } else {
            response.json({ "Mensaje": "Borrado Exitoso" })
        }
    })
}

//Accion para Actualizar Contacto
export const updateMotocicleta = (request, response) => {
    Motocicleta.findOneAndUpdate({ _id: request.params.motocicletaid },
        request.body,
        {
            new: true
        },
        (error, motocicleta_actualizada) => {
            if (error) {
                response.send(error)
            } else {
                response.json(motocicleta_actualizada)
            }
        }
    )
}

