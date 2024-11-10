"use client";
import React from 'react';
import { FaUser } from 'react-icons/fa';
import styles from "@/styles/TopBanner.module.css";  
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const TopBanner = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/Connexion');  
  };

  return (
    <div className={styles.bannerContainer}>  
      <div className={styles.logo}>  
      <Image src="/logo.png" alt="Logo" width={80} height={70} />
      </div>

      <button className={styles.loginButton} onClick={handleLogin}>  
      <FaUser className={styles.icon} /> <strong>Login </strong>   
      </button>
    </div>
  );
};

export default TopBanner;
