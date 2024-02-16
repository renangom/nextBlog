import Image from 'next/image';
import styles from './home.module.css'

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Creative Thoughts Agency.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nulla accusamus, sunt modi nemo dignissimos, dolorum numquam repudiandae nobis provident impedit totam repellat a. Voluptatem porro repellat asperiores praesentium eius!</p>
          <div className={styles.buttons}>
            <button className={styles.button}>Learn More</button>
            <button className={styles.button}>Contact</button>
          </div>
          <div className={styles.brands}>
            <Image src='/brands.png' alt='' fill  className={styles.brand} />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src='/hero.gif' alt='' fill  className={styles.hero} />
        </div>
      </div>
  );
}
