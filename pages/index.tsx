import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClubDAO</title>
        <meta name="description" content="A community-owned and operated organization for Meerkats to grow, innovate, have fun, and make impact in the Solana NFT space together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Join ClubDAO
        </h1>
      </main>
    </div>
  )
}

export default Home
