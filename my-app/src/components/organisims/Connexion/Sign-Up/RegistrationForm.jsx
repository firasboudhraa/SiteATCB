"use client"
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaFacebook, FaGoogle } from 'react-icons/fa'; 
import styles from '../../../../styles/RegistrationForm.module.css'; 

const RegistrationForm = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToRules: false,
    isExpert: false,
    hasWork: false 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'isExpert' && checked) {
      setForm({
        ...form,
        isExpert: true,
        hasWork: false // Uncheck 'hasWork' when 'isExpert' is selected
      });
    } else if (name === 'hasWork' && checked) {
      setForm({
        ...form,
        hasWork: true,
        isExpert: false // Uncheck 'isExpert' when 'hasWork' is selected
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
        <img src="/building.jpg" alt="Building" className={styles.image} />
        <div className={styles.infoText}>
          <p>Vous avez des travaux chez vous? Déposez votre demande sur notre plateforme...</p>
        </div>
      </div>
      <div className={styles.formSection}>
        <h2>Inscrivez-vous dans OTCB</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input
              type="text"
              name="fullName"
              placeholder="Nom et prénom"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

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

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer votre Mot de passe"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                name="isExpert"
                checked={form.isExpert}
                onChange={handleChange}
              />
              Je suis un expert en bâtiment
            </label>
            <label>
              <input
                type="checkbox"
                name="hasWork"
                checked={form.hasWork}
                onChange={handleChange}
              />
              J'ai des travaux chez moi
            </label>
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

        <div className={styles.rulesAgreement}>
          <input
            type="checkbox"
            name="agreeToRules"
            checked={form.agreeToRules}
            onChange={handleChange}
          />
          <label htmlFor="agreeToRules">J'ai lu et j'accepte les <a href="/rules">conditions d'utilisation</a>.</label>
        </div>

        <p className={styles.alreadyAccount}>Vous avez déjà un compte? <a href="/login">Connectez-vous!</a></p>
      </div>
    </div>
  );
};

export default RegistrationForm;
