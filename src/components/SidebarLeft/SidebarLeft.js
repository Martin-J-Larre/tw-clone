import NavLink from './siderbarLeftComponents/NavLink';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import styles from './sidebarLeft.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const SidebarLeft = () => {
  return (
    <div className={styles.flex}>
      <TwitterIcon />
      <NavLink text="Home"  Icon={HomeIcon} />
      <NavLink text="Explore" Icon={TagIcon} />
      <NavLink text="Notifications" Icon={NotificationsNoneIcon} />
      <NavLink text="Messages" Icon={MailOutlineIcon} />
      <NavLink text="BookMarks" Icon={BookmarkBorderIcon} />
      <NavLink text="List" Icon={ListAltIcon} />
      <NavLink text="Profile" Icon={PermIdentityIcon} />
      <NavLink text="More" Icon={MoreHorizIcon} />
      

    </div>
  )
}

export default SidebarLeft;