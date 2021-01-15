
import React  from 'react';
import { TableIndex } from '.';
import { useFetch } from '../../Hooks/useFetch';

export const Services = () => {
  
  let jsonValue = {
    skipRecords: 0,
    maxRecords: 100
  };
  
  const { loading, data } = useFetch('https://adretaildev-olm.omnixsystem.com/v3/routes/coverages/all', jsonValue);
  
  return (
    <div>
      <h1>Listado de Records </h1>
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
  )
}

