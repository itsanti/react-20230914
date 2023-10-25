import { useSelector } from "react-redux";
import { Review } from "./component";
import { useGetReviewsQuery } from '../../redux/services/api';

export const ReviewContainer = ({ reviewId }) => {
    const { review, isFetching } = useGetReviewsQuery(undefined, {
        selectFromResult: result => ({
            ...result,
            review: result.data?.find(review => review.id === reviewId)
        })
    });

    if (isFetching) {
        return <span>Loading...</span>;
    }

    return <Review review={review} />;
};