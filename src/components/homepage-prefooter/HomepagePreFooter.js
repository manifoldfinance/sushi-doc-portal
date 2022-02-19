import ChevronRightImg from '../../../static/img/chevron-right.svg';
import Link from '@docusaurus/Link';
import React from 'react';
import styles from './HomepagePreFooter.module.css';

const PreFooterData = {
  title: 'Sushiswap',
  text: 'Be a DeFi Chef with Sushi',
  button: {
    title: 'Launch dApp',
    href: 'https://app.sushi.com',
  },
  image: require('../homepage-prefooter/img/image-footer.png').default,
};

export default function homepageFooter() {
  return (
    <section className={styles.prefooterWrap}>
      <div className={styles.prefooterFirstColumn}>
        <h2 className={styles.prefooterTitle}>{PreFooterData.title}</h2>
        <p className={styles.prefooterText}>{PreFooterData.text}</p>
        <Link to={PreFooterData.button.href} className={styles.prefooterButton}>
          <span>{PreFooterData.button.title}</span>
          <ChevronRightImg />
        </Link>
      </div>
      <img
        className={styles.prefooterImage}
        src={PreFooterData.image}
        alt={PreFooterData.title}
      />
    </section>
  );
}
