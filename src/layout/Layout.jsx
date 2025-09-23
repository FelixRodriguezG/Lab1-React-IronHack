import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Header from '../components/Header/Header'

export default function Layout() {
  return (
    <div className={`container ${styles.layout}`}>
      <header className={styles.header}>
        <Header/>
        
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mi Portfolio</p>
      </footer>
    </div>
  )
}