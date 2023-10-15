import React from 'react';
import { User } from '../User/component';
import { useSelector } from "react-redux";
import { selectReviews } from "../../redux/entities/review/selectors";


export const Reviews = ({reviewIds}) => {
    const reviews = useSelector(selectReviews);

    return (
        <div className='reviews'>
            <h2 className='reviews-header'>✓ Reviews</h2>
            <ul className='reviews-list'>
            {
                reviewIds.map((reviewId) => (
                    <li className='reviews-item' key={reviewId}>
                        <User userId={reviews[reviewId].userId} />: {reviews[reviewId].text}
                    </li>
                ))
            }
            </ul>
        </div>
    );
};