import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import styles from './Layout.module.css'

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