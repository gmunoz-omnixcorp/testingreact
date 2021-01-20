import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { RouterIndex } from './RouterIndex';
import { Container, Paper, Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
export const RouterS = () => {
    let jsonValue = {
        skipRecords: 0,
        maxRecords: 100
    };

    const { loading, data } = useFetch('/v3/routes/all', jsonValue);
    return (
        <Paper>
            <Container>
                <Grid item lg={12}>
                    <Typography variant="h1">Listado de Rutas </Typography>
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
                            (
                                <RouterIndex data={data} />
                            )
                    }
                </Grid>
            </Container>
        </Paper>
    )
}
