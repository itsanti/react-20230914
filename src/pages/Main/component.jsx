import React from 'react';
import { useState } from 'react';
import { restaurants } from '../../constants/mock'
import { RestaurantTabs } from '../../components/RestaurantTabs/component';
import { Restaurant } from '../../components/Restaurant/component';
import { MainLayout } from '../../layouts/Main/component';
import { UserProvider } from "../../contexts/User";

export const MainPage = () => {
    const [activeRestaurantId, setActive] = useState(restaurants[0].id);

    return (
        <UserProvider>
            <MainLayout>
                <RestaurantTabs
                    restaurants={restaurants}
                    activeRestaurantId={activeRestaurantId}
                    onTabClick={setActive} />
                <Restaurant restaurant={restaurants.find(({id}) => id === activeRestaurantId)} />
            </MainLayout>
        </UserProvider>
    );
}
