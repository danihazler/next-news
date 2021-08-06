import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

export const Header = () => {
    return (
        <header className={styles.main} >
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/feed'><a>Feed</a></Link>
                <Link href='/contact'><a>Contact</a></Link>
            </nav>
        </header>
    );
};