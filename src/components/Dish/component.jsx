import React from 'react';
import { Range } from '../Range/component';

export const Dish = ({name, range}) => {
    return (
        <li className='menu-item'>
        {name} – <Range min={range.min} max={range.max} />
        </li>
    );
};