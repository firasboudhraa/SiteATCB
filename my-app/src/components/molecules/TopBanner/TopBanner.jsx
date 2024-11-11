"use client";
import React from 'react';
import { FaUser } from 'react-icons/fa';
import styles from "@/styles/TopBanner.module.css";  
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const TopBanner = () => {
  const router = useRouter();

  const handlesignup = () => {
    router.push('/Connexion/Signup');  
  };

  const handleLogin = () => {
    router.push('/Connexion/Login');  
  };

  return (
    <div className={styles.bannerContainer}>  
      <div className={styles.logo}>  
        <Image src="/logo.png" alt="Logo" width={80} height={70} />
      </div>

      {/* Wrap buttons in a container to align them on the right */}
      <div className={styles.loginButtonsContainer}>
        <button className={styles.loginButton} onClick={handlesignup}>  
          <FaUser className={styles.icon1} /> <strong>Créer un compte </strong>   
        </button>

        <button className={styles.loginButton} onClick={handleLogin}>  
          <FaUser className={styles.icon} /> <strong>Se Connecter </strong>   
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
