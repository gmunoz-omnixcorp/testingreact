import React from 'react'
import { TableHead , TableRow, TableCell } from '@material-ui/core'
export const TheadGeneral = (props) => {
    return (
        <TableHead>
          <TableRow>
            {
                props.thead.map( (thead, index) => {
                    return (
                        <TableCell key={index}>{thead}</TableCell>
                    )
                })
            }
          </TableRow>
        </TableHead>
    )
}
