"use client"
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaFacebook, FaGoogle } from 'react-icons/fa'; 
import styles from '../../../../styles/RegistrationForm.module.css'; 

const LoginForm = () => {
  const [form, setForm] = useState({
    
    email: '',
    password: '',
  
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'isExpert' && checked) {
      setForm({
        ...form,
        isExpert: true,
        hasWork: false 
      });
    } else if (name === 'hasWork' && checked) {
      setForm({
        ...form,
        hasWork: true,
        isExpert: false 
      });
    } else {
      setForm({
        ...form,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoSection}>
        <div className={styles.infoText}>
          <p>Vous avez des travaux chez vous? Déposez votre demande sur notre plateforme...</p>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Connecter-vous dans OTCB</h2>
        
        <form onSubmit={handleSubmit}>
         

          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          
          <button type="submit" className={styles.submitButton}>Crée mon Compte</button>
        </form>

        <div className={styles.socialLogin}>
          <button className={styles.socialButton}>
            <FaGoogle className={styles.socialIcon} />
          </button>
          <button className={styles.socialButton}>
            <FaFacebook className={styles.socialIcon} />
          </button>
        </div>

        

        <p className={styles.alreadyAccount}>Vous avez déjà un compte? <a href="/login">Connectez-vous!</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
