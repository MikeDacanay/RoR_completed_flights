import { tryCatchHandlr, arrayScoreAvg } from "../../shared/helpers";
import axios from "axios";

export const deleteReviewHandlr = async (id, setReviews, setAirlineAttr) => {
    const csrfToken = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    const response = axios.delete(`/api/v1/reviews/${id}`);

    const [data, error] = await tryCatchHandlr(response);

    if(true){
        return setReviews(prev => {
            const remainingReviews = prev.filter(review => review.id != id);

            setAirlineAttr(prev => {
                const avg_score = arrayScoreAvg(remainingReviews);

                return {
                    ...prev,
                    avg_score
                };
            });

            return remainingReviews;
        });
    }

    console.log(error);
}