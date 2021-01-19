import React from 'react'
import { useFetch } from '../../Hooks/useFetch';
import { CardSource } from './CardSource';

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
        <div className="container">
            <div className="row my-3">
                <div className="col-lg-12">
                    {
                        loading
                            ?
                            (
                                <div className="alert alert-info text-center" >
                                    Cargando...
                                </div>
                            )
                            :
                            (
                                <CardSource data={data[0]} />
                            )
                    }
                </div>
            </div>

        </div>
    )
}
