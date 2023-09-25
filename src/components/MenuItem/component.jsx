import React from 'react';
import { useState } from 'react';
import { Button } from '../Button/component';

export const MenuItem = ({name, range}) => {
    const [amount, setAmount] = useState(0);

    return (
        <li className='menu-item'>
        {name} – <Button
                    text='−' min={range.min} value={amount}
                    onClick={() => setAmount(amount - 1)} />
                 {'\u00A0'}<strong>{amount}</strong>{'\u00A0'}
                 <Button
                    text='+' max={range.max} value={amount}
                    onClick={() => setAmount(amount + 1)} />
        </li>
    );
};