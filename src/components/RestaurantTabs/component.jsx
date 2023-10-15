import React, { useContext }  from 'react';
import { Button } from '../Button/component';
import styles from "./styles.module.scss";
import { UserContext } from "../../contexts/User";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../redux/entities/restaurant/selectors";
import classNames from "classnames";

export const RestaurantTabs = ({restaurantIds, activeRestaurantId, onTabClick}) => {
    const { user } = useContext(UserContext);
    const restaurants = useSelector(selectRestaurants);

    return (
        <nav>
        {
            restaurantIds.map((id) => <Button key={id} text={restaurants[id].name}
                isActive={id === activeRestaurantId}
                size="lg"
                className={classNames(styles['tab-button'], styles[user.theme])}
                onClick={() => {onTabClick(id)}}/>)
        }
        </nav>
    );
}
