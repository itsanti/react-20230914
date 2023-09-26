import React from 'react';

export const Button = ({text, ...props}) => {
    return <button {...props}>{text}</button>;
}
