
import React from 'react';
import { TableIndex } from './CoberturaIndex';
import { useFetch } from '../../Hooks/useFetch';

export const Cobertura = () => {

  let jsonValue = {
    skipRecords: 0,
    maxRecords: 100
  };

  const { loading, data } = useFetch('/v3/routes/coverages/all', jsonValue);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-12">
          <h1 className="text-center">Listado de  Coberturas</h1>
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
                <TableIndex data={data} />
              )
          }
        </div>
      </div>

    </div>
  )
}

