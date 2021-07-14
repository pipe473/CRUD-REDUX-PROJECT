import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


//ACTIONS DE REDUX
import { createNewProductAction } from '../actions/productoActions';

const Nuevo = ({history}) => {

    // STATE DEL COMPONENTE
    const [nombre, guardarProducto] = useState('');
    const [precio, guardarPrecio] = useState(0);

    // UTILIZAR USEDIPATCH Y TE CREA UNA FUNCION
    const dispatch = useDispatch();


    // ACCEDE AL STATE DEL STORE
    const cargando = useSelector( state => state.productos.loading );

    // ACCEDE AL ERROR
    const error = useSelector( state => state.productos.error );
    

    const agregarProduct = product => dispatch( createNewProductAction(product) );

    // CUANDO EL USUARIO HAGA SUBMIT
        const submitNuevo = e =>{
            e.preventDefault();


            // VALIDAR FORMULARIO
            if(nombre.trim() === '' || precio <= 0 ){
                return;
            }

            // SI NO HAY ERRORES


            // CREAR EL NUEVO PRODUCTO
            agregarProduct({
                nombre,
                precio
            });

            //REDIRECCIONAR
            history.push('/');
        }


    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center mb-4 font-weight-bold">
                            Agrega un nuevo Producto
                        </h3>
                        <form
                            onSubmit={submitNuevo}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe tu nombre"
                                    name="nombre_producto"
                                    value={nombre}
                                    onChange={e => guardarProducto( e.target.value )}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Escribe tu nombre"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio( Number(e.target.value) )}
                                    />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase
                                d-block w-100"
                                >Agregar</button>
                        </form>
                        { cargando ? <p>Cargando...</p> : null }
                        { error ? <p className="alert alert-secondary p-2 mt-4 text-center">Ha habido un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Nuevo;