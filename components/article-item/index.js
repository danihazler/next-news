import React from 'react';
import styles from './index.module.css';

export const ArticleItem = ({ article }) => {
    return (
        <li className={styles.article}>
            <a onClick={() => (window.location.href = article.url)}>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                {!!article.urlToImage && <img src={article.urlToImage} alt="" />}
            </a>
        </li>
    )
}