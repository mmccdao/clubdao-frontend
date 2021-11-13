import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import Faq from '../components/Faq'
import Activity from '../components/Activity'
import Footer from '../components/Footer';
import Roadmap from '../components/Roadmap'

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
      <Activity />
      <Roadmap />
      <Faq />

      <Footer />

    </div>
  )
}

export default Home
