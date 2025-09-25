import React, { useState } from 'react';
import Modal from './Modal/FormModal';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    status: 'success'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Aquí iría tu lógica real de envío
      // Simulamos un envío asíncrono
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulamos éxito
      setModalState({
        isOpen: true,
        status: 'success'
      });
      
      // Limpiamos el formulario
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setModalState({
        isOpen: true,
        status: 'error'
      });
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const closeModal = () => {
    setModalState(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  return (
    <section className={styles.contact}>
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta? ¡Escríbeme!</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tu mensaje aquí..."
            rows="5"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar Mensaje
        </button>
      </form>

      <Modal 
        isOpen={modalState.isOpen}
        status={modalState.status}
        onClose={closeModal}
      />
    </section>
  );
}