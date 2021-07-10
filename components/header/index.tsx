import styles from './header.module.css'

export default function header(){
    return (
        <header className={styles.container}>
          <h1 className={styles.title}> Welcome to <a href="https://nextjs.org"> Next.js!</a></h1>
        </header>
    )
}