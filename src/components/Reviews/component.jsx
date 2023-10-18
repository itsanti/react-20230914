import React, {useEffect} from 'react';
import { ReviewContainer } from '../Review/container';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../redux/entities/user/thunks/get-users.js';
import {selectUsersLoadingStatus} from '../../redux/entities/user/selectors';
import { REQUEST_STATUS } from '../../constants/statuses';

export const Reviews = ({reviewIds}) => {
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectUsersLoadingStatus);

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return (
        <div className='reviews'>
            <h2 className='reviews-header'>✓ Reviews</h2>
            <ul className='reviews-list'>
            {loadingStatus !== REQUEST_STATUS.fulfilled ? <div>Loading...</div> : 
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