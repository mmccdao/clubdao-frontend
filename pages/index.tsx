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

        {/* Facebook Open Graph */}
        <meta property="og:url" content="https://mmcountry.club" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ClubDAO" />
        <meta property="og:image" content="https://clubdao-frontend-git-feature-landing-page-mmccdao.vercel.app/logo-meta.png" />
        <meta property="og:image:alt" content="ClubDAO logo" />
        <meta property="og:description" content="A community-owned and operated organization for Meerkats to grow, innovate, have fun, and make impact in the Solana NFT space together" />
        <meta property="og:site_name" content="ClubDAO" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="ClubDAO" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mmcclubdao" />
        <meta name="twitter:creator" content="@mmcclubdao" />
        <meta name="twitter:url" content="https://mmcountry.club" />
        <meta name="twitter:title" content="ClubDAO" />
        <meta name="twitter:description" content="A community-owned and operated organization for Meerkats to grow, innovate, have fun, and make impact in the Solana NFT space together" />
        <meta name="twitter:image" content="https://clubdao-frontend-git-feature-landing-page-mmccdao.vercel.app/logo-meta.png" />
        <meta name="twitter:image:alt" content="A community-owned and operated organization for Meerkats to grow, innovate, have fun, and make impact in the Solana NFT space together" />
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
