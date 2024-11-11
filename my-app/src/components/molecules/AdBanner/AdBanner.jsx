import React from 'react';
import Link from 'next/link'; 
import styles from '../../../styles/AdBanner.module.css';

const AdBanner = () => {
  return (
    <div className={styles.adBanner}>
      <div className={styles.adImages}>
        <div className={styles.adItem}>
          <Link href="/promotion1">
            <img src="/images/ad1.jpg" alt="Publicité 1" className={styles.adImage} />
          </Link>
        </div>
        <div className={styles.adItem}>
          <Link href="/promotion2">
            <img src="/images/ad2.jpg" alt="Publicité 2" className={styles.adImage} />
          </Link>
        </div>
        <div className={styles.adItem}>
          <Link href="/promotion3">
            <img src="/images/ad3.jpg" alt="Publicité 3" className={styles.adImage} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
