import React from 'react';
import { MenuItem } from "../MenuItem/component";

export const Menu = ({menu}) => {
    const minAmount = 0;
    const maxAmount = 5;

    return (
        <div className='menu'>
            <h2 className='menu-header'>✓ Menu</h2>
            <ul className='menu-list'>
            {
                menu.map((menuItem) => (
                    <MenuItem key={menuItem.id} name={menuItem.name} range={{'min': minAmount, 'max': maxAmount}} />
                ))
            }
            </ul>
        </div>
    );
};