import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// CREAR NUEVOS PRODUCTOS
export function createNewProductAction(product){
    return (dispatch) => {
           dispatch(agregarProducto());

           try {
               dispatch( agregarProduct_OK(product) )
           } catch (error) {
               dispatch( agregarProducto_KO(true) )
           }
    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// SI EL PRODUCTO SE GUARDA EN LA BASE DE DATOS
const agregarProduct_OK = product =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: product
});

// SI HUBO UN ERROR

const agregarProducto_KO = () =>({

})