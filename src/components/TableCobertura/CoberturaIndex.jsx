import React, { useState } from 'react'
import { TbodyService } from './TbodyService';
import { TheadGeneral } from '../TheadGeneral/TheadGeneral';
import { TableContainer, Table, TableBody } from '@material-ui/core';

export const TableIndex = (props) => {

  const thead = ['Id del Cobertura', 'Id de la ruta', 'ID de la Mensajeria', 'Tipo de Envio', 'Estado'];
  const [item, setitem] = useState(props.data);
  return (
    <TableContainer>
      <Table>
        <TheadGeneral thead={thead} />
        <TableBody>
          {item.map((resp, index) => {
            return (
              <TbodyService key={index} data={resp} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
