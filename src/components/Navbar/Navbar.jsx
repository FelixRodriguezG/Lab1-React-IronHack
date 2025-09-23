import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {

  return (
    <nav className={styles.navigation}>
        <Link to="/about" className={styles.link}>Sobre Mí</Link>
        <Link to="/hobbies" className={styles.link}>Mis Hobbies</Link>
        <Link to="/songs" className={styles.link}>Mis Canciones</Link>
    </nav>
  )
}

