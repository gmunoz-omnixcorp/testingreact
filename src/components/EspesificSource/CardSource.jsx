import React from 'react';
import { Container, Paper, Grid, Typography } from '@material-ui/core';
import { DaysHelper } from '../../helpers/DaysHelper';

export const CardSource = (props) => {
    return (
        <Paper>
            <Container>
                <Grid item lg={12}>
                    <br />
                    <Typography variant="h6">{props.data.name}</Typography>
                    <Typography variant="h6">Alias</Typography>
                    {
                        props.data.alias.map((alias, index) => {
                            return (<Typography variant="body2" key={index}>{alias}, </Typography>)
                        })
                    }
                    <Typography variant="h6">Configuración del Calendario</Typography>
                    <ul>
                        <li>{props.data.calendarSettings.timezone}</li>
                        <li>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Fechas no laborables</li>
                                {
                                    props.data.calendarSettings.nonWorkingDates.map((nonWorkingDates, index) => {
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
                                            props.data.calendarSettings.nonWorkingDays.map((nonWorkingDays, index) => {
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
                    <Typography variant="h6">Muelle Cruzado</Typography>
                    <ul>
                        {
                            props.data.crossdock.map((crossdock, index) => {
                                return (
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
                    <Typography variant="h6">Capacidad de Despacho</Typography>
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
                    <Typography variant="h6">Calendario</Typography>
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
                    <Typography variant="h6">Capacidad de Volumen</Typography>
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
                    <Typography variant="h6">Sesiones de Trabajo</Typography>
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
                    <Typography variant="h6">Tiempo de Trabajo</Typography>
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
                </Grid>
            </Container>
        </Paper>
    )
}
