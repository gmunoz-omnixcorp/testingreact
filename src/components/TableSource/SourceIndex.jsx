import React, { useState } from 'react'
import { TheadGeneral } from '../TheadGeneral/TheadGeneral';
import { TbodySource } from './TbodySource';

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
        <div className="table-responsive content-table">
            <table className="table table-striped table-bordered ">
            <TheadGeneral thead={thead} />
              <tbody>
                {item.map((resp, index) => {
                  return (
                    <TbodySource key={index} data={resp} />
                  )
                })}
              </tbody>
            </table>
        </div>
    )
}
