import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';
import styles from './postComponent.module.css'

const PostComponent = ({ name, username, verified, text, image, avatar }) => {
    return (
        <div className={styles.postContainer}>
            <div>
                <Avatar className={styles.avatar}
                        src={ avatar }/>
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.textHeader}>
                        <h3>{ name } 
                            <span className={styles.userName}>
                               { verified && <VerifiedIcon className={styles.verified}/>}
                               @{ username }
                            </span> 
                        </h3>
                    </div>
                    <div className={styles.descriptionHeader}>
                        <p>{ text }</p>
                    </div>
                </div>
                <img className={styles.img} src={ image }
                alt='New York City' />
                <div className={styles.footer}>
                    <ChatBubbleOutline />
                    <Repeat />
                    <FavoriteBorder />
                    <Publish />
                </div>
            </div>
        </div>
    )
}

export default PostComponent;