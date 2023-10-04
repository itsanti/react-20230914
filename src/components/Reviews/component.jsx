import React, {useState} from 'react';
import { Modal } from '../Modal/component';
import { ReviewForm } from '../ReviewForm/component';

export const Reviews = ({reviews}) => {
    const [isOpen, showModal] = useState(false);
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
            <Modal title='Add review' isOpen={isOpen} showModal={showModal}>
                <ReviewForm type="in-modal" onCancel={showModal} onSave={showModal}/>
            </Modal>
        </div>
    );
};