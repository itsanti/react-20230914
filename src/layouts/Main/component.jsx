import React, { useContext } from 'react';
import { Button } from '../../components/Button/component';
import { UserContext } from "../../contexts/User";
import styles from "./styles.module.scss";

export const MainLayout = ({ children, className }) => {
    const { user, setUser } = useContext(UserContext);

    const changeTheme = () => {
        const theme = user.theme === 'dark' ? 'light' : 'dark';
        setUser({...user, theme });
    };

    return (
        <div className={className}>
            <header className={styles.header}><h1 className={styles.h1}>Restaurants App</h1>
            <Button size='md' text='Theme' onClick={changeTheme}/>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>{new Date().getFullYear()} Powered by React</footer>
        </div>
    );
};