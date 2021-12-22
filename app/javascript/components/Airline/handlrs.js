import { formValuesCatcher, tryCatchHandlr, arrayScoreAvg } from "../../shared/helpers";
import axios from 'axios';

export const reviewSubmitHandlr = async (e, airline_id, setReviews, setAirlineAttr) => {
    e.preventDefault();
    const payload = formValuesCatcher(e);
    payload.airline_id = airline_id;

    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    const response = axios.post('/api/v1/reviews', payload);

    const [data, error] = await tryCatchHandlr(response);

    if(data) {
        const { data: {data: info}} = data;

        setReviews(prev => {
            const newReviews = [...prev];
            newReviews.push(info);

            setAirlineAttr(prev => {
                const avg_score = arrayScoreAvg(newReviews);

                console.log(avg_score);

                return {
                    ...prev,
                    avg_score
                };
            })

            return newReviews;
        });


    };
    if(error) console.log(error.message);
}