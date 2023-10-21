import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectReviewsIds } from "../../redux/entities/review/selectors";
import { getReviews } from '../../redux/entities/review/thunks/get-reviews';
import { getUsers } from '../../redux/entities/user/thunks/get-users';
import { Reviews } from './component';

export const ReviewsContainer = ({restaurantId}) => {
    const reviewIds = useSelector(selectReviewsIds);
    const dispatch = useDispatch();

    if (!reviewIds) {
        return null;
    }

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {
        dispatch(getReviews(restaurantId));
    }, [restaurantId]);

    return <Reviews reviewIds={reviewIds}/>;
};