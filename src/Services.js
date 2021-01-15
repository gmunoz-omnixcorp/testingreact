
import React  from 'react';
import { useFetch } from './Hooks/useFetch';

export const Services = () => {
  
  let jsonValue = {
    skipRecords: 0,
    maxRecords: 100
  };
  
  const { loading, data } = useFetch('https://adretaildev-olm.omnixsystem.com/v3/routes/coverages/all', jsonValue);
  
  if (!loading) {
    console.log(data)
  }
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
          <>
            <table border="1">
              <thead>
                <tr>
                  <th>id del coverage</th>
                  <th>id de la ruta</th>
                  <th>id del courier</th>
                  <th>shipping type</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((resp, index) => {
                  return (
                    <tr key={index}>
                      <td>{resp.id}</td>
                      <td>{resp.routeId}</td>
                      <td>{resp.courierId}</td>
                      <td>
                        {
                          resp.shippingType.map((shipping, index) => {
                            return (
                              <span key={index}>{shipping} </span>
                            )
                          })
                        }
                      </td>
                      <td>{resp.status ? 'Activo':'No Activo'}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </>
        )
      }
    </div>
  )
}

