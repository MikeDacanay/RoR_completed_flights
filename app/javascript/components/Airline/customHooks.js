import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { tryCatchHandlr } from "../../shared/helpers";
import axios from "axios";

export const useAirline = () => {
    const [ airlineAttr, setAirlineAttr ] = useState({});
    const [ reviews, setReviews ] = useState([]);
    const [ loaded, setLoaded] = useState(false);
    const { slug } = useParams();

    useEffect(() => {
        (async() => {
            const response = axios.get(`/api/v1/airlines/${slug}`); 

            const [data, error] = await tryCatchHandlr(response);

            if(data){              
                const {data: info} = data;      
                const {data: airlineInfo, included} = info;

                setAirlineAttr({
                    ...airlineInfo.attributes,
                    id: airlineInfo.id,
                });
                setReviews(included)
                setLoaded(true)
            }
        })()
    }, [])

    return { airlineAttr, setAirlineAttr, reviews, setReviews, loaded};
}