import Image from 'next/image'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='/messenger_re.svg'
          alt='mail'
          fill
          className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type="text" name="name" id="name" placeholder='Name and surname' />
          <input type="text" name="email" id="email" placeholder='Email Address' />
          <input type="text" name="phone" id="phone" placeholder='Phone number (Optional)' />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
          <button>SEND</button>
        </form>
      </div>
    </div>
  )
}

export default Contact