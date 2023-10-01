import React from 'react';
import { Button } from '../Button/component';
import styles from "./styles.module.scss";

export const RestaurantTabs = ({data, activeRestaurantId, onTabClick}) => {
    return (
        <nav>
        {
            data.map(({id, name}) => <Button key={id} text={name}
                isActive={id === activeRestaurantId}
                size="lg"
                className={styles.btn}
                onClick={() => {onTabClick(id)}}/>)
        }
        </nav>
    );
}
