import React from 'react';
import { Button } from '../Button/component';
import styles from "./styles.module.scss";

export const RestaurantTabs = ({restaurants, activeRestaurantId, onTabClick}) => {
    return (
        <nav>
        {
            restaurants.map(({id, name}) => <Button key={id} text={name}
                isActive={id === activeRestaurantId}
                size="lg"
                className={styles.btn}
                onClick={() => {onTabClick(id)}}/>)
        }
        </nav>
    );
}
