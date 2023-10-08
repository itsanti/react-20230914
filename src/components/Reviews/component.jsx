import React from 'react';

export const Reviews = ({reviews}) => {
    return (
        <div className='reviews'>
            <h2 className='reviews-header'>✓ Reviews</h2>
            <ul className='reviews-list'>
            {
                reviews.map((review) => (
                    <li className='reviews-item' key={review.id}><strong>{review.user}</strong>: {review.text}</li>
                ))
            }
            </ul>
        </div>
    );
};