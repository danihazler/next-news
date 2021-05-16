import React from 'react';
import { ArticleItem } from '../article-item';

export const ArticleList = ({ articles }) => {
    return (
        <ul>
            {articles.map((article, index) => (
                <ArticleItem key={article.title + index} article={article} />
            ))}
        </ul>
    )
}