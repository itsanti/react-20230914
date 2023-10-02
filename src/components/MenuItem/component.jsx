import React from 'react';
import { useState } from 'react';
import { Range } from '../Range/component';

export const MenuItem = ({name, range}) => {
    return (
        <li className='menu-item'>
        {name} – <Range min={range.min} max={range.max} />
        </li>
    );
};