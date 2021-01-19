import React, { useState } from 'react'
import { TbodyService } from './TbodyService';
import { TheadGeneral } from '../TheadGeneral/TheadGeneral';

export const TableIndex = (props) => {

  const thead = ['Id del Cobertura', 'Id de la ruta', 'ID de la Mensajeria', 'Tipo de Envio', 'Estado'];
  const [item, setitem] = useState(props.data);
  return (
    <div className="table-responsive content-table">
      <table className="table table-striped table-bordered ">
        <TheadGeneral thead={thead} />
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
