import Image from 'next/image'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>FarmConnect Agency</h1>
        <p className={styles.desc}>We act as a bridge, fostering collaboration and knowledge exchange between farmers, tractor owners, and agricultural experts. By connecting these diverse resources within the agricultural community, FarmConnect empowers individual farmers to thrive, ultimately contributing to the success and sustainability of the agricultural sector as a whole.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImage} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/tractor3.png" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  )
}

export default Home

