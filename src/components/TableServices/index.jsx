import React, { useState } from 'react'
import { TableService } from './TableService';

export const TableIndex = (props) => {

    const [item, setitem] = useState(props.data);
    return (
        <div>
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
                {item.map((resp, index) => {
                  return (
                    <TableService key={index} data={resp} />
                  )
                })}
              </tbody>
            </table>
        </div>
    )
}
