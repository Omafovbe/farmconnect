import ItemCard from '@/components/itemCard/itemCard'
import styles from './business.module.css'

const getCompanyData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok)
    throw new Error('Could not Fetch Company details')

  return res.json()
}

const Business = async () => {

  const companies = await getCompanyData()
  return (
    <div className={styles.container}>
      {companies.map(company => (

      <div className={styles.card} key={company.id}>
        <ItemCard bus={company} />

      </div>      
      ))}
    </div>
  )
}

export default Business