import Image from "next/image"
import styles from "./singleItem.module.css"
import { Suspense } from "react"
import PostUser from "@/components/postUser/postUser"

const getData = async (slug) => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {next:{revalidate:3600}})
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache:'no-store})
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  if (!res.ok)
    throw new Error('Could not Fetch Company details')

  return res.json()
}

const SingleItem = async ({ params }) => {

  const comInfo = await getData(params.slug)

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
        <h1 className={styles.title}>{comInfo.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={comInfo.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {Date.now().toString().slice(4, 16)}
            </span>
          </div>
        </div>      
        <div className={styles.content}>
          {comInfo.body}
        </div>
      </div>
    </div>
  )
}

export default SingleItem
