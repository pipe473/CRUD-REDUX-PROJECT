import React, { Fragment, useEffect } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductos } from '../actions/productoActions';

const Productos = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //CONSULTAR LA API
        const cargarProductos = () => dispatch( obtenerProductos() );
        cargarProductos();
    }, []);

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>

            <table className="table table-striped">
                <thead className="bg-info table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;