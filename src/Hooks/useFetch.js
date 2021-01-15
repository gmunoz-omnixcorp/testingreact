import { useEffect, useState } from "react"
import axios from "axios";

export const useFetch = ( url = '', json = {} ) => {
    
    const token = 'A7Dnukj7VK31uzvwBI9b07zU7vp2yub958OsnMzq10';

    const [state, setState] = useState({
        data: null,
        loading: true
    });
    
    useEffect(() => {

        setState({
            data: null,
            loading: true
        });
        let result = axios.post(url, json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        result.then( resp => resp )
         .then( data => {
                setState({
                    loading: false,
                    data: data.data.message.records
                });
         });
    }, [url]);

    return state;


}