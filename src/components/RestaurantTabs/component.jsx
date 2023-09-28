import React from 'react';
import { Button } from '../Button/component';

export const RestaurantTabs = ({data, activeRestaurantId, onTabClick}) => {
    return (
        <nav>
        {
            data.map(({id, name}) => <Button key={id} text={name}
                style={{'color': id === activeRestaurantId ? '#EA67A6' : '#8B42E5'}}
                onClick={() => {onTabClick(id)}}/>)
        }
        </nav>
    );
}
