import NavLinks from "./navlinks/NavLinks"
import styles from "./navbar.module.css"

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>FarmConnect</div>
      <div>
        <NavLinks />
      </div>
    </div>
  )
}

export default NavBar
