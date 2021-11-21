import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Activity from '../components/Activity'
import Faq from '../components/Faq'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Roadmap from '../components/Roadmap'
import WhoWeAre from '../components/WhoWeAre'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ClubDAO</title>
        <meta name="description" content="A community-owned and operated organization for Meerkats to grow, innovate, have fun, and make impact in the Solana NFT space together" />
        <link rel="icon" href="/favicon.ico" />

        {/* Search engine */}
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="google" content="nositelinkssearchbox" />
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
