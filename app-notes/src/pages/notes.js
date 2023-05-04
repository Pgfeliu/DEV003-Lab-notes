import styles from '../styles/Home.module.css'

export default function Notes() {
 return (
      
  <>
    <nav className= {styles.menu}> 
      <h1 className = {styles.h1}> CREATE ALL NOTES </h1> 
      </nav>/
    <section className={styles.postContainer}>
     <article className={styles.postTitle} placeholder="Coloque su título acá"> </article>
     <section className={styles.postMessenger}></section>

   </section>
   </>
    )
}


