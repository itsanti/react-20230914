import React from 'react';
import { Menu } from "../Menu/component.jsx";
import { ReviewsContainer } from "../Reviews/container.jsx";
import { ReviewModal } from '../ReviewModal/component.jsx';
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import styles from "./styles.module.scss";

export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    return (
        <section className='restaurant'>
            <h1 className={styles.name}>Restaurant <span>«{restaurant.name}»</span></h1>
            <Menu menu={restaurant.menu}/>
            <ReviewsContainer restaurantId={restaurantId}/>
            <ReviewModal/>
        </section>
    );
};