import { tryCatchHandlr } from "../../shared/helpers";
import axios from "axios";

export const deleteAirlineHandlr = async (slug, setAirlines) => {

    console.log(slug);

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    const response = axios.delete(`/api/v1/airlines/${slug}`);
    const [ data, error ] = await tryCatchHandlr(response);

    if(data) {
        setAirlines(prev => {
            return prev.filter(airline => airline.attributes.slug != slug);
        });



        return;
    }

    console.log(error.messages);
};