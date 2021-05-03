import styles from './index.module.css';

const Feed = ({articles}) => { 
    return (
        <main className='main'>
            {articles.map((article, index) => (
                <div key={index} className={styles.post}>
                    <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                    <p>{article.description}</p>
                    {!!article.urlToImage && <img src={article.urlToImage} alt="" />}
                </div>
            ))}
        </main>
    );
};

export const getStaticProps = async () => {
    const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEWS_KEY}`,
            },
        },
    ).then(res => res.json());

    const { articles } = res;

    return {
        props: {
            articles,
        },
    }
}

export default Feed;