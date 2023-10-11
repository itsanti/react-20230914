import React, { useContext } from 'react';
import classNames from "classnames";
import styles from "./styles.module.scss"
import { UserContext } from "../../contexts/User";

export const Button = ({text, isActive, size, type, className, ...props}) => {
    const { user } = useContext(UserContext);

    return <button
    className={classNames(
        styles.root,
        className,
        styles[size],
        styles[type],
        styles[user.theme],
        {
            [styles.active]: isActive,
            [styles.disabled]: props.disabled
        }
    )}
    {...props}>{text}</button>;
}
