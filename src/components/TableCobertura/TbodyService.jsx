import React from 'react'

export const TbodyService = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.routeId}</td>
            <td>{props.data.courierId}</td>
            <td>
            {
                props.data.shippingType.map((shipping, index) => {
                return (
                    <span key={index}>{shipping} </span>
                )
                })
            }
            </td>
            <td>{props.data.status ? 'Activo':'No Activo'}</td>
        </tr>
    )
}
