import React from 'react';
import Flag from 'react-world-flags';
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
      </div>

      <div className={styles.menu}>
        <a href="/">Accueil</a>
        <a href="Actualite">Actualités</a>
        <a href="/presentation">Présentation</a>
        <a href="/recherche">Recherche</a>
        <a href="/formation">Formation</a>
      </div>

      <div className={styles.searchContainer}>
        <input type="text" placeholder="Recherche..." className={styles.searchInput} />
      </div>

      <div className={styles.language}>
        <Flag code="FR" className={styles.flag} alt="France Flag" />
        <Flag code="TN" className={styles.flag} alt="Tunisia Flag" />
      </div>
    </div>
  );
};

export default Navbar;
