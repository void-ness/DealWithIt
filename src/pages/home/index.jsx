import React, { useEffect, useState } from 'react'
import PullToRefresh from 'react-simple-pull-to-refresh';
import QuotesCard from '../../components/QuotesCard';
import quoteData from '../../data/fetchData';
import { isAuthenticated } from '../../essentials/auth';
import useAnalyticsEventTracker from '../../essentials/useAnalyticsEventTracker';

const Home = () => {
    const [Refresh, setRefresh] = useState(false);
    const [quote, SetQuote] = useState("");
    const [author, SetAuthor] = useState("");

    useEffect(() => {
        if (!isAuthenticated()) {
            window.location = "/";
        }

        document.getElementsByTagName('footer')[0].style.display = "block";
        // eslint-disable-next-line
    }, [])

    const gaEventTracker = useAnalyticsEventTracker('Home');

    const refresher1 = () => {
        const currentValue = Refresh;
        setRefresh(!currentValue);
        gaEventTracker('quote pulled')

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                quoteData().then((data) => {
                    SetQuote(data[0].quote);
                    SetAuthor(data[0].author);
                });
                resolve(
                    "ok"
                );
            }, 400)
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