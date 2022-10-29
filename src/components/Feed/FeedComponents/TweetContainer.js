import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore'
import { Avatar, Button } from '@mui/material';
import styles from './tweetContainer.module.css';
import db from '../../../firebase'

const TweetContainer = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (e) => { 
    e.preventDefault();
    const collectionRef = collection(db, "posts");
    const payload = {
                    name: "Cristiano Messi",
                    username: "crismessi",
                    verified: true,
                    text: tweetMessage,
                    image: tweetImage,
                    avatar: "https://cdn1.iconfinder.com/data/icons/avatar-vol-9/512/3-512.png"
    }
    await addDoc(collectionRef, payload);
    setTweetMessage("");
    setTweetImage("");
  
  }
  return (
    <div className={styles.tweetContainer}>
        <form className={styles.form}>
            <div className={styles.teewtInput}>
                <Avatar src='https://cdn1.iconfinder.com/data/icons/avatar-vol-9/512/3-512.png' />
                <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    className={styles.input} 
                    placeholder="What's happening?" 
                    type="text" />
            </div>
            <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className={styles.imgInput} 
                placeholder="Enter image URL"
                />
            <Button 
                className={styles.twButton}
                type="submit"
                onClick={sendTweet}
                >Tweet
                </Button>
        </form>
    </div>
  )
}

export default TweetContainer