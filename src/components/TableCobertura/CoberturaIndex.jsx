import React, { useState } from 'react'
import { TbodyService } from './TbodyService';

export const TableIndex = (props) => {

    const [item, setitem] = useState(props.data);
    return (
        <div className="table-responsive content-table">
            <table className="table table-striped table-bordered ">
              <thead>
                <tr>
                  <th>Id del Cobertura</th>
                  <th>Id de la ruta</th>
                  <th>ID de la Mensajeria</th>
                  <th>Tipo de Envio</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {item.map((resp, index) => {
                  return (
                    <TbodyService key={index} data={resp} />
                  )
                })}
              </tbody>
            </table>
        </div>
    )
}
