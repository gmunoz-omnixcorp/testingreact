import React from 'react';
import { Link } from 'react-router-dom';
import { DaysHelper } from '../../helpers/DaysHelper';

export const TbodySource = (props) => {
    return (
        <tr>
            <td><Link to={'fuentes/' + props.data.id}>{props.data.id}</Link></td>
            <td>{props.data.name}</td>
            <td>
                {
                    props.data.calendarSettings.nonWorkingDates.map( (nonWorkingDates, index) => {
                        return(<span key={index}>{nonWorkingDates} </span>)
                    })
                }
                <br />
                {
                    props.data.calendarSettings.nonWorkingDays.map( (nonWorkingDays, index) => {
                        return (<span key={index}>{nonWorkingDays} </span>)
                    })
                }
            </td>
            <td>
                {
                    props.data.crossdock.map( (crossdock, index) => {
                        return (
                            <div key={index}>
                                <span>{crossdock.unit}</span> <br/>
                                <span>{crossdock.value}</span> <br/>
                                {
                                    crossdock.productType.map( (productType, index) => {
                                        return(<span key={index}>{productType} </span>)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </td>
            <td>
                {
                    props.data.dispatchCapacity.map( (dispatchCapacity,index) => {
                        return(
                            <div key={index}>
                                <span>{dispatchCapacity.capacity}</span> <br />
                                {
                                    dispatchCapacity.daysOfWeek.map((daysOfWeek, index) => {
                                        return(
                                            <span key={index} className="span-days">
                                                {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                            </ span>
                                        )
                                    })
                                }
                                <br />
                                {
                                    dispatchCapacity.productType.map((productType, index) => {
                                        return(<strong key={index}>{productType}</strong>)
                                    })
                                }
                            </div>
                        )
                    })
                }
            </td>
            <td>
                {
                    props.data.schedule.map( (schedule, index) => {
                        return (
                            <div key={index}>
                                <span>{schedule.deliveryType}</span>
                                <br />
                                <span>{schedule.leadtime.value}, {schedule.leadtime.unit} </span>
                                <br />
                                {schedule.productType.map((productType, index) => {
                                    return (<div key={index}><span >{productType}</span> <br/></div>)
                                })}
                                {schedule.shippingType.map((shippingType, index) => {
                                    return (<span key={index}>{shippingType}</span>)
                                })}
                                <br />
                                {schedule.slots.map((slots, index) => {
                                    return (<div key={index}>
                                        <span> {slots.from}</span><br />
                                        <span> {slots.label}</span><br />
                                        <span> {slots.to}</span>
                                    </div>)
                                })}
                            </div>
                        )
                    })
                }
            </td>
            <td>
                {
                     props.data.volumeCapacity.map( (volumeCapacity, index) => {
                         return(
                             <div key={index}>
                                 {
                                     volumeCapacity.daysOfWeek.map( (daysOfWeek, index) => {
                                         return( 
                                            <span key={index} className="span-days">
                                                {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                            </ span>
                                         )
                                     })
                                 }
                             </div>
                         )
                     })
                }
            </td>
            <td>
                {
                    props.data.workingSessions.map( (workingSessions, index) => {
                        return(
                            <div key={index}>
                                <span>{workingSessions.capacity}</span><br/>
                                <span>{workingSessions.from} - {workingSessions.to}</span><br/>
                                {
                                    workingSessions.daysOfWeek.map( (daysOfWeek, index) => {
                                        return( 
                                           <span key={index} className="span-days">
                                               {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                           </ span>
                                        )
                                    })
                                }
                                {
                                    workingSessions.productType.map((productType, index) => {
                                    return (<div key={index}><span >{productType}</span> <br/></div>)
                                })}
                            </div>
                        )
                    })
                }
            </td>
            <td>
                {
                    props.data.workingTime.map((workingTime, index) => {
                        return(
                            <div key={index}>
                                <span>{workingTime.from} - {workingTime.to}</span><br/>
                                {
                                    workingTime.daysOfWeek.map( (daysOfWeek, index) => {
                                        return( 
                                           <span key={index} className="span-days">
                                               {DaysHelper(daysOfWeek.toString())} <span className="coma">,</span> 
                                           </ span>
                                        )
                                    })
                                }
                            </div>
                            
                        )
                    })
                }
            </td>
        </tr>
    )
}
