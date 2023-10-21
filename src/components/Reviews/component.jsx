import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { ReviewContainer } from '../Review/container';
import {getUsers} from '../../redux/entities/user/thunks/get-users.js';

export const Reviews = ({reviewIds}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className='reviews'>
            <h2 className='reviews-header'>✓ Reviews</h2>
            <ul className='reviews-list'>
            {
                reviewIds.map((reviewId) => (
                    <li className='reviews-item' key={reviewId}>
                        <ReviewContainer reviewId={reviewId} />
                    </li>
                ))
            }
            </ul>
        </div>
    );
};