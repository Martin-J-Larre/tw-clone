import styles from './sidebarRight.module.css';
import {
    TwitterTimeLineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import { Search } from '@mui/icons-material';

const SidebarRight = () => {
    return (
        <section className={styles.sidebar}>
            <div className={styles.input}>
                <Search />
                <input placeholder="Search Twitter" type="text" />
            </div>
        </section>
    )
}

export default SidebarRight;