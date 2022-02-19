import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageDeveloperLinks.module.css';

const DeveloperList = [
  {
    link: '#',
    button: {
      title: 'Register for Onsen',
      href: '#',
    },
    image: (
      <div
        className={clsx(
          styles.developerCardImage,
          styles.foundationGrantProgramImage,
        )}
      />
    ),
    title: 'Incentives program',
    description: (
      <>
        Incentivizing protocols and liquidity by rebates and discounts for
        increasing volume and protocol TVL.
      </>
    ),
  },
  {
    button: {
      title: 'Deploy a strategy',
      href: '#',
    },
    image: (
      <div className={clsx(styles.developerCardImage, styles.bugBountyImage)} />
    ),
    title: 'Bentobox strategies',
    description: (
      <>
        Launch a new strategy today and get a percentage of the strategies
        harvest upfront, today.
      </>
    ),
  },
];

function DeveloperLink({ image, title, description, link, button }) {
  return (
    <div className={styles.developerCard}>
      <div>{image}</div>
      <h3 className={styles.developerCardTitle}>{title}</h3>
      <div className={styles.developerCardText}>
        {description}
        &nbsp;
        {link && (
          <Link className={styles.developerCardLink} to={link}>
            Read more
          </Link>
        )}
      </div>

      <Link className={styles.developerCardButton} to={button.href}>
        {button.title}
      </Link>
    </div>
  );
}

export default function HomepageDeveloperLinks() {
  return (
    <section>
      <h2 className={styles.developerLinksTitle}>Developer links</h2>
      <div className={styles.developerLinksWrap}>
        {DeveloperList.map((props, idx) => (
          <DeveloperLink key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
