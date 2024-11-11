import React from 'react';
import styles from '../../../../styles/StatsBar.module.css';
import { FaCalendarAlt, FaClipboardCheck, FaHardHat, FaHandshake } from 'react-icons/fa';

export default function StatsBar() {
  const statsData = [
    { icon: <FaCalendarAlt />, number: '9ème', label: "Année d'activité" },
    { icon: <FaClipboardCheck />, number: '8318', label: 'Demandes validées' },
    { icon: <FaHardHat />, number: '1919', label: 'Professionnels actifs' },
    { icon: <FaHandshake />, number: '26132', label: 'Mises en relation' },
  ];

  return (
    <div className={styles.statsSection}>
      {statsData.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <div className={styles.icon}>{stat.icon}</div>
          <h2 className={styles.heading}>{stat.number}</h2>
          <p className={styles.parag}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
