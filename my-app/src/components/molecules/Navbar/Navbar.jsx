import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa';
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className={styles.menu}>
        <a href="/">Accueil</a>
        <a href="/actualite">Actualité</a>
        <a href="/presentation">Présentation</a>
        <a href="/recherche">Recherche</a>
      </div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Recherche..." className={styles.searchInput} />
      </div>

      <div className={styles.language}>
        <FaFlag className={styles.flag} style={{ color: 'red' }} /> 
        <FaFlag className={styles.flag} style={{ color: 'blue' }} /> 
      </div>
    </div>
  );
};

export default Navbar;
