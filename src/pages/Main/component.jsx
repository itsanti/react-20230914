import React, {useEffect, useState} from 'react';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { RestaurantContainer } from '../../components/Restaurant/container';
import { MainLayout } from '../../layouts/Main/component';
import { UserProvider } from "../../contexts/User";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import styles from "./styles.module.scss";

export const MainPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const dispatch = useDispatch();
    const [activeRestaurantId, setActive] = useState(restaurantIds[0]);

    useEffect(() => {
        dispatch(getRestaurants());
    }, []);

    return (
        <UserProvider>
            {restaurantIds.length > 0 && (
                <MainLayout className={styles.layout}>
                    <RestaurantTabs
                        restaurantIds={restaurantIds}
                        activeRestaurantId={activeRestaurantId}
                        onTabClick={setActive} />
                        <RestaurantContainer restaurantId={activeRestaurantId} />
                </MainLayout>
            )}
        </UserProvider>
    );
}
