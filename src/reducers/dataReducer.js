import { acc } from 'react-native-reanimated';
import { SAVE_DATA } from '../actions/Tipos';

const estadoInicial = {
    nombre: String,
    apellido: String
};

const dataReducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case SAVE_DATA:
            return {
                ...estado,
                nombre: accion.nombre,
                apellido: accion.apellido
            }
        default:
            return estadoInicial;
    };
};

export default dataReducer;