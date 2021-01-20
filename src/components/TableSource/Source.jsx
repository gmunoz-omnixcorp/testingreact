import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { SourceIndex } from './SourceIndex';
import { Container, Paper, Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export const Source = () => {
    let jsonValue = {
        skipRecords: 0,
        maxRecords: 100
    };

    const { loading, data } = useFetch('/v3/sources/all', jsonValue);
    return (
        <Paper>
            <Container>
                <Grid item lg={12}>
                    <Typography variant="h1">Listado de Fuentes </Typography>
                    <hr />
                    {
                        loading
                            ?
                            (
                                <>
                                    <Alert severity="info"> Cargando...</Alert>
                                    <br />
                                </>
                            )
                            :
                            (
                                <SourceIndex data={data} />
                            )
                    }
                </Grid>
            </Container>
        </Paper>
    )
}
