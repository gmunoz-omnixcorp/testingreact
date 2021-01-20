import React, { useState } from 'react'
import { TheadGeneral } from '../TheadGeneral/TheadGeneral';
import { TbodySource } from './TbodySource';
import { TableBody, TableContainer, Table } from '@material-ui/core';

export const SourceIndex = (props) => {
  const thead = [
    'Identificador',
    'Nombre',
    'Configuración del Calendario',
    'Muelle Cruzado',
    'Capacidad de Despacho',
    'Calendario',
    'Capacidad de Volumen',
    'Sesiones de Trabajo', 
    'Tiempo de Trabajo'];
    const [item, setitem] = useState(props.data);
    return (
        <TableContainer>
            <Table className="table table-striped table-bordered ">
            <TheadGeneral thead={thead} />
              <TableBody>
                {item.map((resp, index) => {
                  return (
                    <TbodySource key={index} data={resp} />
                  )
                })}
              </TableBody>
            </Table>
        </TableContainer>
    )
}
