import styles from './navLink.module.css'
const NavLink = ({text, Icon}) => {
  return (
    <div className={styles.links}>
      <Icon className={styles.icon}/>
      <h2 className={styles.h2}>{text}</h2>
    </div>
  )
}

export default NavLink;