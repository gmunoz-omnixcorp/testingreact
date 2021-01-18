import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { SourceIndex } from './SourceIndex';

export const Source = () => {
    let jsonValue = {
        skipRecords: 0,
        maxRecords: 100
      };
    
    const { loading, data } = useFetch('/v3/sources/all', jsonValue);
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-lg-12">
                <h1 className="text-center">Listado de Fuentes </h1>
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
                        <SourceIndex data={data} />
                    )
                }
                </div>
            </div>

        </div>
    )
}
