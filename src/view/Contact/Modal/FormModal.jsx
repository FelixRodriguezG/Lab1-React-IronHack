import styles from './FormModal.module.css';

export default function Modal({ isOpen, onClose, status }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={`${styles.content} ${styles[status]}`}>
          {status === 'success' ? (
            <>
              <h3>¡Mensaje Enviado!</h3>
              <p>Gracias por contactar conmigo. Te responderé lo antes posible.</p>
            </>
          ) : (
            <>
              <h3>Error al Enviar</h3>
              <p>Lo siento, ha habido un problema. Por favor, inténtalo de nuevo.</p>
            </>
          )}
          <button onClick={onClose} className={styles.closeButton}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}