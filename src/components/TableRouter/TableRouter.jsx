import React from 'react'

export const TableRouter = (props) => {
    return (
        <tr>
             <td>{props.data.id}</td>
            <td>
                <span>{props.data.source.type} </span> <br/>
                <span>ID: {props.data.source.data.id} </span> <br/>
                <span>{props.data.source.data.name} </span> <br/>
            </td>
                
            <td>
                <span>{props.data.target.type} </span> <br/>
                <span >{props.data.target.data.criteria0}</span> <br />
                <span >{props.data.target.data.criteria1}</span> <br />
                <span >{props.data.target.data.criteria2}</span>
            </td>
        </tr>
    )
}


