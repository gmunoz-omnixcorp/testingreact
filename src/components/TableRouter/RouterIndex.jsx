import { TableBody, TableContainer, Table } from '@material-ui/core';
import React, { useState } from 'react'
import { TheadGeneral } from '../TheadGeneral/TheadGeneral';
import { TableRouter } from './TableRouter';

export const RouterIndex = (props) => {
    const thead = ['Identificador', 'Fuente', 'Datos'];
    const [item, setitem] = useState(props.data);
    return (
        <TableContainer>
            <Table className="table table-striped table-bordered ">
              <TheadGeneral thead={thead} />
              <TableBody>
                {item.map((resp, index) => {
                  return (
                    <TableRouter key={index} data={resp} />
                  )
                })}
              </TableBody>
            </Table>
        </ TableContainer>
    )
}
