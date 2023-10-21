import { useEffect } from 'react';
import { Menu } from "./component";
import { useSelector, useDispatch } from "react-redux";
import { selectDishIds } from "../../redux/entities/dish/selectors";
import { getMenu } from '../../redux/entities/dish/thunks/get-menu';

export const DishContainer = ({ restaurantId }) => {
    const menu = useSelector(selectDishIds);
    const dispatch = useDispatch();

    if (!menu) {
        return null;
    }

    useEffect(() => {
        dispatch(getMenu(restaurantId));
    }, [restaurantId]);

    return <Menu menu={menu} />;
};