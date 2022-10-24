import styles from './navLink.module.css'
const NavLink = ({active,text, Icon}) => {
  return (
    <div className={styles.links + ' ' + (active ? styles.linkActive : '')}> 
      <Icon className={styles.icon}/>
      <h2 className={styles.h2}>{text}</h2>
    </div>
  )
}

export default NavLink;