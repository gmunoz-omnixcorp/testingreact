import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { CardSource } from './CardSource';
import { Container, Paper, Grid } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export const EspesificSource = (props) => {
    const id = props.match.params.id;
    let jsonValue = {
        skipRecords: 0,
        maxRecords: 100,
        filter: {
            id
        }
    };
    const { loading, data } = useFetch('/v3/sources/all', jsonValue);
    return (
        <Paper>
            <Container>
                <Grid item lg={12}>
                    {
                        loading
                            ?
                            (
                                <>
                                    <Alert severity="info">Cargando...</Alert>
                                    <br />
                                </>
                            )
                            :
                            (
                                <CardSource data={data[0]} />
                            )
                    }
                </Grid>
            </Container>
        </Paper>
    )
}
