import { SAVE_DATA } from './Tipos';

export const saveData = (nombre, apellido) => (
    {
        type: SAVE_DATA,
        nombre: nombre,
        apellido: apellido
    }
);