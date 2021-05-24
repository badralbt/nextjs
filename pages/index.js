import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EAR SEX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.tumblr.com/dashboard">ART!</a>
        </h1>

        <p className={styles.description}>
          GET YOUR ENERGY FROM{' '}
          <code className={styles.code}>acid</code>
        </p>

        <div className={styles.grid}>
          <a href="https://www.youtube.com/" className={styles.card}>
            <h3>Top 100 &rarr;</h3>
            <p>Listen up.</p>
          </a>

          <a href="https://www.gmail.com/" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Contact me and artists.</p>
          </a>

          <a
            href="https://www.fb.com/"
            className={styles.card}
          >
            <h3>Event &rarr;</h3>
            <p>Don't miss RAVE.</p>
          </a>

          <a
            href="https://www.khanbank.com/mn/personal"
            className={styles.card}
          >
            <h3>Deposit &rarr;</h3>
            <p>
                5111530447 Khanbank.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
