import ArrowOutside from '../../../static/img/icons/arrow-outside.svg';
import Link from '@docusaurus/core/lib/client/exports/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Onsen Bar',
    description:
      'Onsen aims to bring new liquidity to SushiSwap, decrease slippage, expand our pool offerings, and foster exciting synergistic partnerships with other DeFi projects.',
    image: <div className={clsx(styles.featureCardImage, styles.onsenImage)} />,
    links: [
      {
        title: 'Introduction',
        href: '#',
      },
      {
        title: 'Incentives',
        href: '#',
      },
      {
        title: 'Markets',
        href: '#',
      },
      {
        title: 'Sushi Guard',
        href: '#',
      },
      {
        title: 'API',
        isSwagger: false,
        href: '#',
      },
    ],
  },
  {
    title: 'Bentobox',
    description:
      'BentoBox is a token vault that generates yield for the capital deposited into it. The vault uses low-risk farming strategies and is the foundation for all of Sushis financial instruments',
    image: (
      <div
        className={clsx(
          styles.featureCardImage,
          styles.spotPriceAggregatorImage,
        )}
      />
    ),
    links: [
      {
        title: 'Active Boxes',
        href: '/docs/bentobox/introduction',
      },
      {
        title: 'Vault Concepts',
        href: '/docs/bentobox/concepts',
      },
      {
        title: 'Strategies',
        href: '#',
      },
      {
        title: 'API',
        isSwagger: false,
        href: '#',
      },
    ],
  },
  {
    title: 'MiSO',
    description:
      'MISO is a suite of open-source smart contracts created to ease the process of launching a new project on the Sushi. MISO aims to be the place for token creators and communities to launch new project tokens. ',
    image: (
      <div className={clsx(styles.featureCardImage, styles.sushipartyImage)} />
    ),
    links: [
      {
        title: 'Introduction',
        href: '#',
      },
      {
        title: 'Auctions',
        href: '#',
      },
      {
        title: 'Partner Programs',
        href: '#',
      },
    ],
  },
];

function Feature({ title, description, image, links }) {
  return (
    <div className={styles.featureCard}>
      <div>
        <div>
          <h3 className={styles.featureCardTitle}>{title}</h3>
          <p className={styles.featureCardText}>{description}</p>
        </div>
        {image}
      </div>
      <div className={styles.featureCardLinks}>
        {links.map((link, index) => {
          if (link.title) {
            return (
              <Link
                href={link.href}
                className={styles.featureCardLinkWrap}
                key={index}
              >
                <p className={styles.featureCardLinkTitle}>
                  <span>{link.title}</span>
                  {link.isSwagger && (
                    <span className={styles.featureCardLinkSwagger}>
                      Swagger
                    </span>
                  )}
                  {link.versionLabel && (
                    <span className={styles.featureCardLinkVersionLabel}>
                      {link.versionLabel}
                    </span>
                  )}
                </p>
                <ArrowOutside className={styles.featureCardLinkIcon} />
              </Link>
            );
          } else {
            return <span />;
          }
        })}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <h2 className={styles.featureListTitle}>Protocols</h2>
      <div className={styles.featureList}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
