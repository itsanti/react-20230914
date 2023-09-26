import React from 'react';
import { Button } from '../Button/component';
import { useState } from 'react';

export const Range = ({
    min=Number.MIN_SAFE_INTEGER,
    max=Number.MAX_SAFE_INTEGER
}) => {
    const [amount, setAmount] = useState(0);

    return (
        <div style={{'display':'inline'}}>
            <Button text='−' disabled={amount <= min} onClick={() => setAmount(amount - 1)} />
            {'\u00A0'}<strong>{amount}</strong>{'\u00A0'}
            <Button text='+' disabled={amount >= max} onClick={() => setAmount(amount + 1)} />
        </div>
    );
}
