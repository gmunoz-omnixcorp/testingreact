import React, { useState } from 'react'
import { TableRouter } from './TableRouter';

export const RouterIndex = (props) => {
    const [item, setitem] = useState(props.data);
    return (
        <div>
            <table className="table table-striped table-bordered ">
              <thead>
                <tr>
                  <th>Identificador</th>
                  <th>Fuente</th>
                  <th>Datos</th>
                </tr>
              </thead>
              <tbody>
                {item.map((resp, index) => {
                  return (
                    <TableRouter key={index} data={resp} />
                  )
                })}
              </tbody>
            </table>
        </div>
    )
}
