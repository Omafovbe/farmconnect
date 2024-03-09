import Image from 'next/image'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.txtContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>Bridging the gap in Agriculture</h1>
        <p className={styles.desc}>
        FarmConnect empowers all stakeholders within the agricultural community by facilitating connections and fostering collaboration. Farmers gain access to a network of local tractor owners and agricultural experts, improving efficiency and addressing challenges. Tractor owners can generate income by renting out underutilized equipment, while experts can share their knowledge and expertise with farmers, contributing to the advancement of the agricultural sector as a whole.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Farmers</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Farmers</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Farmers</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src='/tractor1.jpg'
          alt='Pic of tractor'
          fill
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default About