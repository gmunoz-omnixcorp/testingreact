
import React from 'react';
import { TableIndex } from './CoberturaIndex';
import { useFetch } from '../../Hooks/useFetch';
import { Container, Paper, Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export const Cobertura = () => {

  let jsonValue = {
    skipRecords: 0,
    maxRecords: 100
  };

  const { loading, data } = useFetch('/v3/routes/coverages/all', jsonValue);

  return (
    <Paper>
      <Container>
        <Grid item lg={12}>
        <Typography variant="h1">Listado de  Coberturas</Typography>
          <hr />
          {
            loading
            ?
              (
                <>
                  <Alert severity="info">
                      Cargando...
                  </Alert>
                  <br/>
                </>
              )
              :
              (<TableIndex data={data} />)
          }
        </Grid>
      </Container>
    </Paper>
  )
}

