import React from 'react'
import {TableRow, TableCell, Typography } from '@material-ui/core';

export const TbodyService = (props) => {
    return (
        <TableRow>
            <TableCell>{props.data.id}</TableCell>
            <TableCell>{props.data.routeId}</TableCell>
            <TableCell>{props.data.courierId}</TableCell>
            <TableCell>
            {
                props.data.shippingType.map((shipping, index) => {
                return (
                    <Typography variant="body2" key={index}>{shipping} </Typography>
                )
                })
            }
            </TableCell>
            <TableCell>{props.data.status ? 'Activo':'No Activo'}</TableCell>
        </TableRow>
    )
}
