import Image from "next/image"
import styles from "./singleItem.module.css"

const SingleItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://placebeard.it/640/480"
          alt="pic"
          height={400}
          width={300}
          className={styles.img}
        />
      </div>
      <div className={styles.txtContainer}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias
          autem accusamus voluptatem temporibus ea quaerat laborum ipsum
          dolores, consectetur maxime commodi odio dolore voluptates? Incidunt
          reprehenderit et delectus sunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eius, vitae mollitia nemo qui pariatur rerum
          molestiae ipsum dolorum, asperiores totam quidem quod quos officiis
          officia repellat cumque placeat! Excepturi, cumque.
        </p>
      </div>
    </div>
  )
}

export default SingleItem
