import { forwardRef } from 'react'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';
import styles from './postComponent.module.css'

const PostComponent = forwardRef(({ name, username, verified, text, image, avatar }, ref) => {
    return (
        <div className={styles.postContainer} ref={ ref }>
            <div>
                <Avatar className={styles.avatar}
                        src={ avatar }/>
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.textHeader}>
                        <h4>{ name } 
                            <span className={styles.userName}>
                               { verified && <VerifiedIcon className={styles.verified}/>}
                               @{ username }
                            </span> 
                        </h4>
                    </div>
                    <div className={styles.descriptionHeader}>
                        <p>{ text }</p>
                    </div>
                </div>
                <img className={styles.img} src={ image }
                alt= "" />
                <div className={styles.footer}>
                    <ChatBubbleOutline />
                    <Repeat />
                    <FavoriteBorder />
                    <Publish />
                </div>
            </div>
        </div>
    )
});

export default PostComponent;