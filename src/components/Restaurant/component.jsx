import React from 'react';
import { Menu } from "../Menu/component.jsx";
import { Reviews } from "../Reviews/component.jsx";

export const Restaurant = ({restaurant}) => {
    return (
        <section className='restaurant'>
            <hr />
            <h1 className='restaurant-name'>Restaurant «{restaurant.name}»</h1>
            <hr />
            <Menu menu={restaurant.menu}/>
            <Reviews reviews={restaurant.reviews}/>
        </section>
    );
};