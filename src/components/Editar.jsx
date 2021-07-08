import React from 'react';

const Editar = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center mb-4 font-weight-bold">
                            Editar Productos
                        </h3>
                        <form>
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Escribe tu nombre"
                                    name="producto"
                                    />
                            </div>
                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Escribe tu nombre"
                                    name="precio"
                                    />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary font-weight-bold text-uppercase
                                d-block w-100"
                                >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Editar;