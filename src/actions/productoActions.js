import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// CREAR NUEVOS PRODUCTOS
export function createNewProductAction(product){
    return () => {
        console.log(product);        
    }
}