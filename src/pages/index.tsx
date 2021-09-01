import type { FC } from 'react'
import Head from 'next/head'
import UsersList from 'src/components/UsersList'
import styles from './style.module.css'

const Home: FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Frontend Technical test - Leboncoin</title>
      <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
    </Head>

    <main className={styles.main}>
      <UsersList />
    </main>
  </div>
)

export default Home
