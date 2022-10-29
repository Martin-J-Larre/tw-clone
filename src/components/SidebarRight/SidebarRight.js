import styles from './sidebarRight.module.css';
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import { Search } from '@mui/icons-material';

const SidebarRight = () => {
    return (
        <section className={styles.sidebar}>
            <div className={styles.inputContainer}>
                <Search className={styles.searchIcon}/>
                <input className={styles.input} placeholder="Search Twitter" type="text" />
            </div>
            <div className={styles.happeningContainer}>
                <h2 className={styles.h2}>What's Happening</h2>
                <TwitterTweetEmbed 
                tweetId={'933354946111705097'} />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 500}} />
            </div>
        </section>
    )
}

export default SidebarRight;