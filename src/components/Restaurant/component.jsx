import React from 'react';
import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";
import { ReviewModal } from '../ReviewModal/component.jsx';
import styles from "./styles.module.scss";

export const Restaurant = ({restaurantId}) => {
    return (
        <section className='restaurant'>
            <h1 className={styles.name}>Restaurant <span>«{restaurant.name}»</span></h1>
            <Menu menu={restaurant.menu}/>
            <Reviews reviewIds={restaurant.reviews}/>
            <ReviewModal/>
        </section>
    );
};