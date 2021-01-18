import React, { useState } from 'react'
import { TbodySource } from './TbodySource';

export const SourceIndex = (props) => {
    const [item, setitem] = useState(props.data);
    console.log(item)
    return (
        <div className="table-responsive content-table">
            <table className="table table-striped table-bordered ">
              <thead>
                <tr>
                  <th>Identificador</th>
                  <th>name</th>
                  <th>calendarSettings</th>
                  <th>crossdock</th>
                  <th>dispatchCapacity</th>
                  <th>schedule</th>
                  <th>volumeCapacity</th>
                  <th>workingSessions</th>
                  <th>workingTime</th>
                </tr>
              </thead>
              <tbody>
                {item.map((resp, index) => {
                  return (
                    <TbodySource key={index} data={resp} />
                  )
                })}
              </tbody>
            </table>
        </div>
    )
}
