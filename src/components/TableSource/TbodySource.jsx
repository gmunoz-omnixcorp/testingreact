import React from 'react';
import { Link } from 'react-router-dom';
import { DaysHelper } from '../../helpers/DaysHelper';
import {TableRow, TableCell, Typography } from '@material-ui/core';

export const TbodySource = (props) => {
    return (
        <TableRow>
            <TableCell><Link to={'fuentes/' + props.data.id}>{props.data.id}</Link></TableCell>
            <TableCell>{props.data.name}</TableCell>
            <TableCell>
                {
                    props.data.calendarSettings.nonWorkingDates.map( (nonWorkingDates, index) => {
                        return(<Typography variant="body2" key={index}>{nonWorkingDates} </Typography>)
                    })
                }
                {
                    props.data.calendarSettings.nonWorkingDays.map( (nonWorkingDays, index) => {
                        return (<Typography variant="body2" key={index}>{nonWorkingDays} </Typography>)
                    })
                }
            </TableCell>
            <TableCell>
                {
                    props.data.crossdock.map( (crossdock, index) => {
                        return (
                            <div key={index}>
                                <Typography variant="body2">{crossdock.unit}</Typography>
                                <Typography variant="body2">{crossdock.value}</Typography>
                                {
                                    crossdock.productType.map( (productType, index) => {
                                        return(<Typography variant="body2" key={index}>{productType} </Typography>)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </TableCell>
            <TableCell>
                {
                    props.data.dispatchCapacity.map( (dispatchCapacity,index) => {
                        return(
                            <div key={index}>
                                <Typography variant="body2">{dispatchCapacity.capacity}</Typography>
                                {
                                    dispatchCapacity.daysOfWeek.map((daysOfWeek, index) => {
                                        return(
                                            <Typography variant="body2" key={index} className="span-days">
                                                {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                            </ Typography>
                                        )
                                    })
                                }
                                {
                                    dispatchCapacity.productType.map((productType, index) => {
                                        return(<Typography variant="body2" key={index}>{productType}</Typography>)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </TableCell>
            <TableCell>
                {
                    props.data.schedule.map( (schedule, index) => {
                        return (
                            <div key={index}>
                                <Typography variant="body2">{schedule.deliveryType}</Typography>
                                <Typography variant="body2">{schedule.leadtime.value}, {schedule.leadtime.unit} </Typography>
                                {schedule.productType.map((productType, index) => {
                                    return (<div key={index}><Typography variant="body2" >{productType}</Typography></div>)
                                })}
                                {schedule.shippingType.map((shippingType, index) => {
                                    return (<Typography variant="body2" key={index}>{shippingType}</Typography>)
                                })}
                                {schedule.slots.map((slots, index) => {
                                    return (<div key={index}>
                                        <Typography variant="body2"> {slots.from}</Typography>
                                        <Typography variant="body2"> {slots.label}</Typography>
                                        <Typography variant="body2"> {slots.to}</Typography>
                                    </div>)
                                })}
                            </div>
                        )
                    })
                }
            </TableCell>
            <TableCell>
                {
                     props.data.volumeCapacity.map( (volumeCapacity, index) => {
                         return(
                             <div key={index}>
                                 {
                                     volumeCapacity.daysOfWeek.map( (daysOfWeek, index) => {
                                         return( 
                                            <Typography variant="body2" key={index} className="span-days">
                                                {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                            </ Typography>
                                         )
                                     })
                                 }
                             </div>
                         )
                     })
                }
            </TableCell>
            <TableCell>
                {
                    props.data.workingSessions.map( (workingSessions, index) => {
                        return(
                            <div key={index}>
                                <Typography variant="body2">{workingSessions.capacity}</Typography>
                                <Typography variant="body2">{workingSessions.from} - {workingSessions.to}</Typography>
                                {
                                    workingSessions.daysOfWeek.map( (daysOfWeek, index) => {
                                        return( 
                                           <Typography variant="body2" key={index} className="span-days">
                                               {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                           </ Typography>
                                        )
                                    })
                                }
                                {
                                    workingSessions.productType.map((productType, index) => {
                                    return (<div key={index}><Typography variant="body2" >{productType}</Typography></div>)
                                })}
                            </div>
                        )
                    })
                }
            </TableCell>
            <TableCell>
                {
                    props.data.workingTime.map((workingTime, index) => {
                        return(
                            <div key={index}>
                                <Typography variant="body2">{workingTime.from} - {workingTime.to}</Typography>
                                {
                                    workingTime.daysOfWeek.map( (daysOfWeek, index) => {
                                        return( 
                                           <Typography variant="body2" key={index} className="span-days">
                                               {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                           </ Typography>
                                        )
                                    })
                                }
                            </div>
                            
                        )
                    })
                }
            </TableCell>
        </TableRow>
    )
}
