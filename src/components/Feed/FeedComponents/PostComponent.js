import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from '@mui/material';
import styles from './postComponent.module.css'

const PostComponent = () => {
    return (
        <div className={styles.postContainer}>
            <div>
                <Avatar className={styles.avatar}/>
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.textHeader}>
                        <h3>
                            Messi Ronaldo <span className={styles.userName}><VerifiedIcon className={styles.verified}/>@messironaldo</span> 
                        </h3>
                    </div>
                    <div className={styles.descriptionHeader}>
                        <p>Lorem lorem lorem lorem lorem lorem</p>
                    </div>
                </div>
                <img className={styles.img} src='https://img.freepik.com/free-photo/skyline-downtown-new-york-new-york-usa_268835-773.jpg?w=740&t=st=1666751498~exp=1666752098~hmac=e4918d5ebf6667600a48e42033cc9e05e647808129af920dc8d0ad974774d049'
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