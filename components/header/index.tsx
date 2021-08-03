import styles from './header.module.css'
import Image from 'next/image'
import profilePic from 'public/programmer.png'


export default function header(){
    return (
        <header className={styles.container}>
          <h1 className={styles.title}> Carlos Henrique</h1>
	        <h3 className={styles.title}> Backend Developer</h3>
          <Image src={profilePic} alt="Picture of the author" />
        </header>
    )
}
