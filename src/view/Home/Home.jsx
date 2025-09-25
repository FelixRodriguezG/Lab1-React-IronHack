import { Link } from 'react-router-dom'
import HobbyList from '../../components/HobbyList/HobbyList'
import AboutMe from '../../components/AboutMe/AboutMe'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <h2 className={styles.welcome}>Bienvenido a mi Web Personal</h2>
      <div className={styles.infoContainer}>
      <AboutMe/>
      <HobbyList/>
      </div>
    </>
  )
}