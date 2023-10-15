import React from 'react';
import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";

export const User = ({userId}) => {
    const user = useSelector((state) => selectUserById(state, userId));

    return (
        <strong>{user.name}</strong>
    );
};