"use client";
import React from 'react';
import { FaUser } from 'react-icons/fa';
import styles from "@/styles/TopBanner.module.css";  
import { useRouter } from 'next/navigation';

const TopBanner = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/');  
  };

  return (
    <div className={styles.bannerContainer}>  
      <div className={styles.logo}>  
      </div>

      <button className={styles.loginButton} onClick={handleLogin}>  
      <FaUser className={styles.icon} /> <strong>Login </strong>   
      </button>
    </div>
  );
};

export default TopBanner;
