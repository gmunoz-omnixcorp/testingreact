
import React, { useEffect } from 'react';
import { recordsHelper } from './helpers/recordsHelper';

export const Services = () => {
  useEffect(() => {
    getrecordsHelper();
  }, []);
  const getrecordsHelper = async () => {
    let jsonValue = {
      numRecordsReturned: 9,
      skippedRecords: 0,
      maxPages: 0,
      totalRecordsMatched: 0
    };
    const response = await recordsHelper(
      '',
      JSON.stringify(jsonValue),
      'all'
    );
    console.log(response)
  }
  return (
    <>
      <h1>Hola soy servicios</h1>
    </>
  )
}

