import React from 'react';
import { Range } from '../Range/component';

export const Dish = ({name, range, className}) => {
    return (
        <li className={className}>
        {name} – <Range min={range.min} max={range.max} />
        </li>
    );
};