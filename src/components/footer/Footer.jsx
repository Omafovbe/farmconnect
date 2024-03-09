import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>FarmConnect</div>
      <div className={styles.text}>Farm Connect Agency &#169; All rights reserved</div>
    </div>
  )
}

export default Footer