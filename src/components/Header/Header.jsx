import React from "react";
import NavBar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
  
      <div className={styles.imgContainer}>
        <img
          className={styles.img}
          src="funko.png"
          alt="Imagen estilo funkoPop"
        />
        <aside className={styles.nameContainer}>
            <h1>Felix</h1>
            <h2>Rodriguez Gonzalez</h2>
            <NavBar/>
        </aside>
      </div>
    
  );
}