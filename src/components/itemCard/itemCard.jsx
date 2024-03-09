import Image from "next/image"
import styles from "./itemCard.module.css"
import Link from "next/link"

const ItemCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/business/post">
          {/* <Image src='https://dummyimage.com/640x480/444/fff' alt='' fill /> */}
          <Image
            src="https://placebeard.it/640/480"
            alt=""
            fill
            className={styles.img}
          />
        </Link>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>
          <Link href="/business/post">Eboka Farms</Link>
        </div>
        <div className={styles.location}>Enugu</div>
      </div>
    </div>
  )
}

export default ItemCard
