import React from 'react';

export const Button = ({
    text,
    value,
    min=Number.MIN_SAFE_INTEGER,
    max=Number.MAX_SAFE_INTEGER,
    onClick,
    ...props
}) => {
    return <button onClick={onClick} disabled={value === min || value === max} {...props}>{text}</button>;
}
