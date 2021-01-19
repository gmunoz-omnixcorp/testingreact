import React from 'react';
import { DaysHelper } from '../../helpers/DaysHelper';

export const CardSource = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Alias</h6>
                {
                    props.data.alias.map((alias, index) => {
                        return(<span key={index}>{alias}, </span>)
                    })
                }
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Configuración del Calendario</h6>
                <ul>
                    <li>{props.data.calendarSettings.timezone}</li>
                    <li>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Fechas no laborables</li>
                            {
                                props.data.calendarSettings.nonWorkingDates.map((nonWorkingDates, index) =>{
                                    return (<li className="list-group-item" key={index}>{nonWorkingDates}</li>)
                                })
                            }
                        </ul>
                    </li>
                    <li>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Días no laborables
                                <ul>
                                {
                                    props.data.calendarSettings.nonWorkingDays.map((nonWorkingDays, index) =>{
                                        return (
                                        <li className="list-group-item" key={index}>
                                            {DaysHelper(nonWorkingDays.toString())}
                                        </li>)
                                    })
                                }
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Muelle Cruzado</h6>
                <ul>
                {
                    props.data.crossdock.map((crossdock, index) => {
                        return(
                            <ul key={index}>
                                <li>
                                    {crossdock.unit}
                                </li>
                                <li>
                                    {crossdock.value}
                                </li>
                                <li>Tipo de Producto
                                    <ul>
                                    {
                                        crossdock.productType.map((productType, index) => {
                                            return (
                                                <li key={index} className="list-group-item">
                                                    {productType}
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                </li>
                            </ul>
                        )    
                    })
                }
                </ul>
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Capacidad de Despacho</h6>
                {
                    props.data.dispatchCapacity.map((dispatchCapacity, index) => {
                        return (
                            <ul key={index}>
                                <li>Capacidad</li>
                                <li>{dispatchCapacity.capacity}</li>
                                <li>
                                    <ul>

                                    {
                                        dispatchCapacity.daysOfWeek.map((daysOfWeek, index) => {
                                        return (
                                            <li key={index}>{DaysHelper(daysOfWeek.toString())}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                </li>
                                <li>Tipo de Producto
                                    <ul>

                                        {
                                            dispatchCapacity.productType.map((productType, index) => {
                                                return (<li key={index}>{productType}</li>)
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        )
                    })
                }
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Calendario</h6>
                {
                    props.data.schedule.map((schedule, index) => {
                        return (
                            <ul key={index}>
                                <li>Tipo de Envio: {schedule.deliveryType}</li>
                                <li>Valor: {schedule.leadtime.value}</li>
                                <li>unit: {schedule.leadtime.unit}</li>
                                <li>Tipo de producto
                                    <ul>
                                    {
                                        schedule.productType.map((productType, index) => {
                                            return (<li key={index}>{productType}</li>)
                                        })
                                    }
                                    </ul>
                                </li>
                                <li>Tipo de Envío
                                    <ul>
                                    {
                                        schedule.shippingType.map((shippingType, index) => {
                                            return (<li key={index}>{shippingType}</li>)
                                        })
                                    }
                                    </ul>
                                </li>
                                <li>Ranuras</li>
                                {
                                    schedule.slots.map((slots, index) => {
                                        return (
                                            <ul key={index}>
                                                <li >{slots.from} - {slots.to} - {slots.label}</li>
                                            </ul>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                }
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Capacidad de Volumen</h6>
                {
                    props.data.volumeCapacity.map((volumeCapacity, index) => {
                        return (
                            <ul key={index}>
                                <li>Capacidad: {volumeCapacity.capacity}</li>
                                <li>Días de la Semana
                                    <ul>
                                    {
                                        volumeCapacity.daysOfWeek.map((daysOfWeek, index) => {
                                        return (
                                            <li key={index}>{DaysHelper(daysOfWeek.toString())}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                </li>
                            </ul>
                        )
                    })
                }
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Sesiones de Trabajo</h6>
                {
                    props.data.workingSessions.map((workingSessions, index) => {
                        return (
                            <ul key={index}>
                                <li>Capacidad: {workingSessions.capacity}</li>
                                <li>Desde: {workingSessions.from}</li>
                                <li>Hasta: {workingSessions.to}</li>
                                <li>Días de la Semana
                                    <ul>
                                    {
                                        workingSessions.daysOfWeek.map((daysOfWeek, index) => {
                                        return (
                                            <li key={index}>{DaysHelper(daysOfWeek.toString())}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                </li>
                                <li>Tiempo de Bloqueo
                                    <ul>
                                        <li>Desde: {workingSessions.lockTime.from}</li>
                                        <li>Hasta: {workingSessions.lockTime.to}</li>
                                    </ul>
                                </li>
                                <li>Tipo de Producto
                                    <ul>
                                        {
                                            workingSessions.productType.map((productType, index) => {
                                                return (<li key={index}>{productType}</li>)
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        )
                    })
                }
                <hr/>
                <h6 className="card-subtitle mb-2 text-muted">Tiempo de Trabajo</h6>
                {
                    props.data.workingTime.map((workingTime, index) => {
                        return (
                            <ul key={index}>
                                <li>Desde: {workingTime.from}</li>
                                <li>Hasta: {workingTime.to}</li>
                                <li>Días de la Semana
                                    <ul>
                                    {
                                        workingTime.daysOfWeek.map((daysOfWeek, index) => {
                                        return (
                                            <li key={index}>{DaysHelper(daysOfWeek.toString())}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </div>
    )
}
