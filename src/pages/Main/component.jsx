import React from 'react';
import { useState } from 'react';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { Restaurant } from '../../components/Restaurant/component';
import { MainLayout } from '../../layouts/Main/component';
import { UserProvider } from "../../contexts/User";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import styles from "./styles.module.scss";

export const MainPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const [activeRestaurantId, setActive] = useState(restaurantIds[0]);

    return (
        <UserProvider>
            <MainLayout className={styles.layout}>
                <RestaurantTabs
                    restaurantIds={restaurantIds}
                    activeRestaurantId={activeRestaurantId}
                    onTabClick={setActive} />
                <Restaurant restaurantId={activeRestaurantId} />
            </MainLayout>
        </UserProvider>
    );
}
