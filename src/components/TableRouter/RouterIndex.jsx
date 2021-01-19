import React, { useState } from 'react'
import { TheadGeneral } from '../TheadGeneral/TheadGeneral';
import { TableRouter } from './TableRouter';

export const RouterIndex = (props) => {
    const thead = ['Identificador', 'Fuente', 'Datos'];
    const [item, setitem] = useState(props.data);
    return (
        <div>
            <table className="table table-striped table-bordered ">
              <TheadGeneral thead={thead} />
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
