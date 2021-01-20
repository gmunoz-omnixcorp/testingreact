import React from 'react'
import {TableRow, TableCell, Typography } from '@material-ui/core'

export const TableRouter = (props) => {
    return (
        <TableRow>
             <TableCell>{props.data.id}</TableCell>
            <TableCell>
                <Typography variant="body2">{props.data.source.type} </Typography> 
                <Typography variant="body2">ID: {props.data.source.data.id} </Typography> 
                <Typography variant="body2">{props.data.source.data.name} </Typography> 
            </TableCell>
                
            <TableCell>
                <Typography variant="body2">{props.data.target.type} </Typography> 
                <Typography variant="body2">{props.data.target.data.criteria0}</Typography> 
                <Typography variant="body2">{props.data.target.data.criteria1}</Typography> 
                <Typography variant="body2">{props.data.target.data.criteria2}</Typography>
            </TableCell>
        </TableRow>
    )
}


