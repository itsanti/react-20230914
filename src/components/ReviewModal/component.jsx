import React, {useState} from 'react';
import { Modal } from '../Modal/component';
import { ReviewForm } from '../ReviewForm/component';

export const ReviewModal = () => {
    const [isOpen, setIsModalOpened] = useState(false);
    return (
        <Modal title='Add review' isOpen={isOpen} setIsModalOpened={setIsModalOpened}>
            <ReviewForm type="in-modal" onCancel={setIsModalOpened} onSave={setIsModalOpened}/>
        </Modal>
    );
};











