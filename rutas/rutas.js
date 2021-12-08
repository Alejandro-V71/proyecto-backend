//Construir Endpoint: ruta proyecto REST (arquitectura orientado a servicios)
//Responder como mensajes en formato JSON
import {
    addMotocicleta,
    getMotocicletas,
    getMotocicletaById,
    deleteMotocicleta,
    updateMotocicleta
} from "../controladores/MotocicletaController.js";

const rutas = function (app) {
    app.route('/motocicletas')
        .get(getMotocicletas)
        .post(addMotocicleta)
    app.route('/motocicletas/:motocicletaid')
        .get(getMotocicletaById)
        .put(updateMotocicleta)
        .delete(deleteMotocicleta)
}

export default rutas;