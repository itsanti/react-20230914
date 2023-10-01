import React from 'react';
import styles from "./styles.module.scss";

export const MainLayout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}><h1>Restaurants App</h1></header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>{new Date().getFullYear()} Powered by React</footer>
        </div>
    );
};