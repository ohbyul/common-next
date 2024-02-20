import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>

        <a href="/docs/form/input" className={styles.card}>
          <h2> home <span>-&gt;</span> </h2>
          <p> 임시 홈 버튼입니다. docs로 이동 </p>
        </a>

      </div>
    </main>
  )
}
