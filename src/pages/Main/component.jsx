import React from 'react';
import { useState } from 'react';
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { Restaurant } from '../../components/Restaurant/component';
import { MainLayout } from '../../layouts/Main/component';
import { UserProvider } from "../../contexts/User";
import styles from "./styles.module.scss";
import { useGetRestaurantsQuery } from '../../redux/services/api';

export const MainPage = () => {
    const { data: restaurantIds, isFetching } = useGetRestaurantsQuery(undefined, {
        selectFromResult: (result) => {
            return {
              ...result,
              data: result?.data?.map(({ id }) => id),
            };
          },
    });

    //const { data, isFetching } = useGetRestaurantsQuery();
    if (isFetching) {
        return <div>Loading...</div>;
    }

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
