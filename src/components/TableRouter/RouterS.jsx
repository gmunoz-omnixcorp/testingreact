import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { RouterIndex } from './RouterIndex';
export const RouterS = () => {
    let jsonValue = {
        skipRecords: 0,
        maxRecords: 100
      };
    
      const { loading, data } = useFetch('/v3/routes/all', jsonValue);
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-lg-12">
                <h1 className="text-center">Listado de Rutas </h1>
                <hr />
                {
                    loading
                    ?
                    (
                        <div className="alert alert-info text-center" >
                        Cargando...
                        </div>
                    )
                    :
                    (
                        <RouterIndex data={data} />
                    )
                }
                </div>
            </div>

        </div>
    )
}
