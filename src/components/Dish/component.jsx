import React from 'react';
import { Range } from '../Range/component';
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const Dish = ({dishId, range, className}) => {
    const dish = useSelector((state) => selectDishById(state, dishId));

    return (
        <li className={className}>
        {dish.name} – <Range min={range.min} max={range.max} />
        </li>
    );
};