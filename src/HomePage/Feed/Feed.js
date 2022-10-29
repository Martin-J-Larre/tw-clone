import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore'
import styles from './feed.module.css'
import Header from '../../components/FeedComponents/Header'
import PostComponent from '../../components/FeedComponents/PostComponent';
import TweetContainer from '../../components/FeedComponents/TweetContainer';
import db from '../../firebase';
import FlipMove from "react-flip-move";


const Feed = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const _snapshot = onSnapshot(collection(db, "posts"), (snapshot) => {
    setPosts(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })));
  });
  return _snapshot;
  }, [])

  return (
    <section className={styles.feed}>
        <Header />
        <TweetContainer />
        <FlipMove>    
        {posts.map(
          post => (
          <PostComponent 
          key={post.id}
          name={ post.name } 
          username={ post.username}
          verified={ post.verified } 
          text={ post.text }
          image={ post.image} 
          avatar={ post.avatar}
          />))}
        </FlipMove>
    </section>
  )
}

export default Feed;