import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClubDAO</title>
        <meta name="description" content="A community-owned and operated organization for Meerkats to grow, innovate, have fun, and make impact in the Solana NFT space together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <WhoWeAre />

    </div>
  )
}

export default Home
