import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import HobbyList from '../../components/HobbyList/HobbyList'

export default function Home() {
  return (
    <>
        
      <h1>Bienvenido a mi Web Personal</h1>
      <HobbyList/>
      
    </>
  )
}