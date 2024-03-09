import ItemCard from '@/components/itemCard/itemCard'
import styles from './business.module.css'


const Business = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <ItemCard />

      </div>
      <div className={styles.card}>
        <ItemCard />

      </div>
      <div className={styles.card}>
        <ItemCard />

      </div>
      <div className={styles.card}>
        <ItemCard />

      </div>
      
    </div>
  )
}

export default Business