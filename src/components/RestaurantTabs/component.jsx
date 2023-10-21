import React, { useContext }  from 'react';
import { UserContext } from "../../contexts/User";
import { RestaurantTabContainer } from "../RestarauntTab/container";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const RestaurantTabs = ({restaurantIds, activeRestaurantId, onTabClick}) => {
    const {user} = useContext(UserContext);
    return (
        <nav>
        {
            restaurantIds.map((id) => <RestaurantTabContainer
                key={id}
                restaurantId={id}
                isActive={id === activeRestaurantId}
                onClick={() => {onTabClick(id)}}
                className={classNames(styles['tab-button'], styles[user.theme])}
            />)
        }
        </nav>
    );
}
