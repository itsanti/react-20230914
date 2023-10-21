import React from 'react';
import { Dish } from '../Dish/component';

import styles from './styles.module.scss';

export const Menu = ({menu}) => {
    const minAmount = 0;
    const maxAmount = 5;

    return (
        <div className='menu'>
            <h2 className='menu-header'>✓ Menu</h2>
            <ul className={styles.dishList}>
            {
                menu.map((dishId) => (
                    <Dish key={dishId}
                        dishId={dishId}
                        className={styles.dish}
                        range={{'min': minAmount, 'max': maxAmount}} />
                ))
            }
            </ul>
        </div>
    );
};