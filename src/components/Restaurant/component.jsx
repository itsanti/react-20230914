import React from 'react';
import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";
import styles from "./styles.module.scss";

export const Restaurant = ({restaurant}) => {
    return (
        <section className='restaurant'>
            <h1 className={styles.name}>Restaurant <span>«{restaurant.name}»</span></h1>
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </section>
    );
};