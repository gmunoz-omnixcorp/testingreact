
import React, { useEffect, useState } from 'react';
import { recordsHelper } from './helpers/recordsHelper';

export const Services = () => {
  
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    getrecordsHelper();
  }, []);
  const getrecordsHelper = async () => {
    let jsonValue = {
      skipRecords: 0,
      maxRecords: 100
    };
    const response = await recordsHelper(
      JSON.stringify(jsonValue),
    );
    setItem(response.data.message.records)
    console.log(item)
  }
  return (
    <table>
      <caption> Listado </caption>
      <thead>
        <tr> </tr>
      </thead>
    </table>
  )
}

