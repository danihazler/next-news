import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.main} >
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/feed'>Feed</Link>
                <Link href='/eom'>EOM</Link>
            </nav>
        </header>
    );
};