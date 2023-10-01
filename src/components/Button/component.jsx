import React from 'react';
import classNames from "classnames";
import styles from "./styles.module.scss";

export const Button = ({text, isActive, size, type, className, ...props}) => {
    return <button
    className={classNames(
        styles.root,
        className,
        styles[size],
        styles[type],
        {
            [styles.active]: isActive,
            [styles.disabled]: props.disabled
        }
    )}
    {...props}>{text}</button>;
}
