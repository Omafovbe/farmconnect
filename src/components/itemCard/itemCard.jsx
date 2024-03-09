import Image from "next/image"
import styles from "./itemCard.module.css"
import Link from "next/link"

const ItemCard = ({ bus }) => {
  const busID = bus.id
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href={`/business/${busID}`}>
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
        <div>
          <Link href={`/business/${busID}`} className={styles.title} >{bus.company.name}</Link>
          <p>{ bus.company.catchPhrase}</p>
        </div>
        <div className={styles.location}>{bus.address.city}</div>
      </div>
    </div>
  )
}

export default ItemCard
