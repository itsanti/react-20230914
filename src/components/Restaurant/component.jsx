import React from 'react';
import { DishContainer } from "../Menu/container.jsx";
import { ReviewsContainer } from "../Reviews/container.jsx";
import { ReviewModal } from '../ReviewModal/component.jsx';
import styles from "./styles.module.scss";

export const Restaurant = ({restaurant}) => {
    return (
        <section className='restaurant'>
            <h1 className={styles.name}>Restaurant <span>«{restaurant.name}»</span></h1>
            <DishContainer restaurantId={restaurant.id}/>
            <ReviewsContainer restaurantId={restaurant.id}/>
            <ReviewModal/>
        </section>
    );
};