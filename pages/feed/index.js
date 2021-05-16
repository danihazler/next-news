import { ArticleList } from "../../components/article-list";

const Feed = ({articles}) => { 
    return (
        <main className='main'>
            <ArticleList articles={articles} />
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