import React from 'react';
import { useState } from 'react';
import { Button } from '../../components/Button/component';
import { Restaurant } from '../../components/Restaurant/component';


export const Tabs = ({data}) => {
    const [activeRestaurantId, setActive] = useState(data[0].id);

    return (
        <>
            <nav>
            {
                data.map(({id, name}) => <React.Fragment key={id}>
                    <Button text={name}
                    style={{'color': id === activeRestaurantId ? '#EA67A6' : '#8B42E5'}}
                    onClick={() => {setActive(id)}}/>{'\u00A0'}
                </React.Fragment>)
            }
            </nav>
            {
                data.filter(({id}) => id === activeRestaurantId).map((item) => (
                    <Restaurant key={item.id} restaurant={item}/>
                ))
            }
        </>
    );
}
