import React, { useEffect, useState } from 'react'
import PullToRefresh from 'react-simple-pull-to-refresh';
import QuotesCard from '../../components/QuotesCard';
import quoteData from '../../data/fetchData';

const Home = () => {
    const [Refresh, setRefresh] = useState(false);
    const [quote, SetQuote] = useState("");
    const [author, SetAuthor] = useState("");

    useEffect(() => {
        quoteData().then((data) => {
            SetQuote(data[0].quote);
            SetAuthor(data[0].author);
        });
    }, [Refresh])

    const refresher1 = () => {
        const currentValue = Refresh;
        setRefresh(!currentValue);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    "ok"
                );
            }, 500)
        })
    }

    return (
        <>
            <PullToRefresh onRefresh={() => refresher1()} pullingContent="">
                <QuotesCard quotetext={quote} authorName={author} />
            </PullToRefresh>
        </>
    )
};

export default Home;