import styles from './feed.module.css'
import Header from './FeedComponents/Header'
import PostComponent from './FeedComponents/PostComponent';
import TweetContainer from './FeedComponents/TweetContainer';
const Feed = () => {
  return (
    <section className={styles.feed}>
        <Header />
        <TweetContainer />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
        <PostComponent />
    </section>
  )
}

export default Feed;