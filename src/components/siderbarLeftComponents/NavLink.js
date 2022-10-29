import styles from './navLink.module.css'
const NavLink = ({active,text, Icon}) => {
  return (
    <div className={styles.links + ' ' + (active ? styles.linkActive : '')} id='responsive-links' > 
      <Icon className={styles.icon}/>
      <h3 className={styles.h3}>{text}</h3>
    </div>
  )
}

export default NavLink;