import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO ,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';

import clienteAxios from '../config/axios';

import Swal from 'sweetalert2';

// CREAR NUEVOS PRODUCTOS
export function createNewProductAction(product){
    return async(dispatch) => {
           dispatch(agregarProducto());

           //ALERTA 
           Swal.fire(
               'Correcto',
               'Producto añadido correctamente!!',
               'success'
           )

           try {
               //INSERTAR EN LA API
               await clienteAxios.post('/productos', product);

               //SI TODO SALE BIEN ACTUALIZA EL STATE
               dispatch( agregarProduct_OK(product) )
           } catch (error) {
               // SI HAY UN ERRROR CAMBIAR EL STATE
               dispatch( agregarProducto_KO(true) );

               //ALERTA DE ERROR
               Swal.fire({
                   icon: 'error',
                   title: 'Ha habido un error...',
                   text: 'Intenta añadir el producto de nuevo'
               })
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

const agregarProducto_KO = estado =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});


// FUNCION QUE DESCARGA LOS PRODUCTOS DE LA BASE DE DATOS
export function obtenerProductos(){
    return async (dispatch) => {
        dispatch( descargarProductos() );

        try {
            const resp = await clienteAxios.get('/productos');
            dispatch( productDownloaded_OK(resp.data) );
            
        } catch (error) {
            console.log(error);            
            dispatch( productDownloaded_KO() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const productDownloaded_OK = products => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: products
});

const productDownloaded_KO = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});