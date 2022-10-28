import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore'
import styles from './feed.module.css'
import Header from './FeedComponents/Header'
import PostComponent from './FeedComponents/PostComponent';
import TweetContainer from './FeedComponents/TweetContainer';
import db from '../../firebase'


const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "post"), (snapshot) => {
    console.log("dataaaaaaa", snapshot.docs);
  } )
  }, [])

  return (
    <section className={styles.feed}>
        <Header />
        <TweetContainer />

        {posts.map(
          post => (
          <PostComponent 
          name={ post.name } 
          username={ post.username}
          verified={ post.verified } 
          text={ post.text }
          image={ post.image} 
          avatar={ post.avatar}
          />
          )
        )}

    </section>
  )
}

export default Feed;