import React from 'react'

export const TheadGeneral = (props) => {
    return (
        <thead>
          <tr>
            {
                props.thead.map( (thead, index) => {
                    return (
                        <th key={index}>{thead}</th>
                    )
                })
            }
          </tr>
        </thead>
    )
}
