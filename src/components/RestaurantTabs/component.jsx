import React, { useContext }  from 'react';
import { Button } from '../Button/component';
import styles from "./styles.module.scss";
import { UserContext } from "../../contexts/User";
import classNames from "classnames";

export const RestaurantTabs = ({restaurants, activeRestaurantId, onTabClick}) => {
    const { user } = useContext(UserContext);

    return (
        <nav>
        {
            restaurants.map(({id, name}) => <Button key={id} text={name}
                isActive={id === activeRestaurantId}
                size="lg"
                className={classNames(styles['tab-button'], styles[user.theme])}
                onClick={() => {onTabClick(id)}}/>)
        }
        </nav>
    );
}
