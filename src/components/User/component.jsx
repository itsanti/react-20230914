import React from 'react';
import { useGetUsersQuery } from '../../redux/services/api';

export const User = ({userId}) => {
    //const { isFetching } = useGetUsersQuery();

    const { user, isFetching } = useGetUsersQuery(undefined, {
        selectFromResult: result => ({
            ...result,
            user: result.data?.find(user => user.id === userId)
        })
    });

    if (isFetching) {
        return <span>Loading...</span>;
    }

    return (
        <strong>{user.name}</strong>
    );
};