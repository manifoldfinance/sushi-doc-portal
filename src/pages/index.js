import Head from '@docusaurus/core/lib/client/exports/Head';
import HomePageBackgroundImage from '../../static/img/_bg.svg';
import HomepageDeveloperLinks from '../components/homepage-developer-links/HomepageDeveloperLinks';
import HomepageFeatures from '../components/homepage-features/HomepageFeatures';
import HomepageFooter from '../components/homepage-footer/HomepageFooter';
import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';

function HomepageHeader() {
  return (
    <header className={styles.headerWrap}>
      <h1 className={styles.mainTitle}></h1>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      pageClassName={styles.mainLayout}
      description="Be a DeFi Chef with Sushi."
    >
      <Head>
        <title>Sushi | Knowledgebase</title>
        <meta property="og:title" content="Sushi | Knowledgebase" />
        <meta property="og:description" content="Be a DeFi Chef with Sushi." />
        <meta property="og:url" content="https://docs.sushiguard.com/" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Sushiswap Documentation" />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="Sushi | Knowledgebase" />
        <meta name="twitter:description" content="Be a DeFi Chef with Sushi." />
        <meta name="twitter:image:alt" content="Sushi | Knowledgebase" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:site" content="@sushiswap" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className={styles.mainContainer}>
        <div className="page-container">
          <HomepageHeader />
          <div className={styles.section}>
            <HomepageFeatures />
          </div>
          <div className={styles.section2}>
            <HomepageDeveloperLinks />
          </div>
        </div>
        <HomepageFooter />
      </main>
    </Layout>
  );
}
