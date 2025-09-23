import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <h1>404 - Página no encontrada</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}