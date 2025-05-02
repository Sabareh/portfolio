import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { TailSpin } from 'react-loader-spinner'
import TweetEmbed from 'react-tweet-embed'
import tweets from '../data/tweets'
import Base from '../layouts/Base'

export async function getStaticProps() {
  const meta = {
    title: 'Tweets // Victor Sabare',
    description: 'A collection of my tweets.',
    tagline: 'Tweets. Thoughts. Insights.',
    image: '/static/images/tweets-bw.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function TweetsPage(props) {
  const { title, description, image } = props
  const [loadingTweets, setLoadingTweets] = useState({})
  const [allLoaded, setAllLoaded] = useState(false)

  useEffect(() => {
    // Initialize loading state for each tweet
    const initialLoadingState = tweets.reduce((acc, tweetId) => {
      acc[tweetId] = true;
      return acc;
    }, {});
    setLoadingTweets(initialLoadingState);
  }, []);

  useEffect(() => {
    // Check if all tweets are loaded
    if (Object.keys(loadingTweets).length > 0) {
      const stillLoading = Object.values(loadingTweets).some(loading => loading);
      setAllLoaded(!stillLoading);
    }
  }, [loadingTweets]);

  const handleTweetLoad = (tweetId) => {
    setLoadingTweets(prev => ({
      ...prev,
      [tweetId]: false
    }));
  }

  const handleTweetFail = (tweetId) => {
    console.error(`Failed to load tweet: ${tweetId}`);
    setLoadingTweets(prev => ({
      ...prev,
      [tweetId]: false
    }));
  }

  const renderTweets = () => {
    return tweets.map((tweetId) => (
      <div key={tweetId} style={{ marginBottom: '20px' }}>
        <TweetEmbed
          id={tweetId}
          tweetId={tweetId}
          options={{ 
            theme: 'dark',
            align: 'center',
            cards: 'hidden'
          }}
          onLoad={() => handleTweetLoad(tweetId)}
          onError={() => handleTweetFail(tweetId)}
        />
      </div>
    ))
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://sabare.tech/tweets" property="og:url" />
        <meta content={`https://sabare.tech${image}`} property="og:image" />
      </Head>

      <p>{description}</p>

      <h2>My Tweets</h2>
      <div style={{ position: 'relative', minHeight: '200px' }}>
        {!allLoaded && Object.keys(loadingTweets).length > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '100px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#5D3FD3"
              ariaLabel="tail-spin-loading"
              radius="1"
            />
          </div>
        )}

        <div style={{ opacity: allLoaded ? 1 : 0.3, transition: 'opacity 0.3s' }}>
          {renderTweets()}
        </div>
      </div>

      <h2>Let's chat</h2>
      <p>
        <a href="https://sabare.tech/contact" target="_blank">
          Hit me up
        </a>{' '}
        if what you read here resonates with you.
      </p>
    </>
  )
}

TweetsPage.Layout = Base

export default TweetsPage
