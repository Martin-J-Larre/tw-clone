import { Avatar, Button } from '@mui/material';
import styles from './tweetContainer.module.css';

const TweetContainer = () => {
  return (
    <div className={styles.tweetContainer}>
        <form className={styles.form}>
            <div className={styles.teewtInput}>
                <Avatar src='https://cdn1.iconfinder.com/data/icons/avatar-vol-9/512/3-512.png' />
                <input className={styles.input} placeholder="What's happening?" type="text" />
            </div>
            <Button>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetContainer