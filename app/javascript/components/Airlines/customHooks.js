import { useState, useEffect } from 'react';
import { tryCatchHandlr } from '../../shared/helpers';
import axios from 'axios';

export const useAirlines = () => {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        (async() => {
            const response = axios.get('/api/v1/airlines.json');

            const [data, error] = await tryCatchHandlr(response);
            const {data: {data: airlines}} = data;

            if(data) setAirlines(airlines);

            if(error) console.log(error.messages);
        })()
    }, []);

    return { airlines, setAirlines };
}
