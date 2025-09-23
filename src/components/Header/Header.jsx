import React from "react";
import { Link } from "react-router-dom";
import Navigator from "../Navigator/Navigator";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={`container ${style.header}`}>
      <div className={style.imgContainer}>
        <img
          className={style.img}
          src="funko.png"
          alt="Imagen estilo funkoPop"
        />
        <aside className={style.nameContainer}>
            <h1>Felix</h1>
            <h2>Rodriguez Gonzalez</h2>
            <nav className={style.nav}>
              <Link to="/" className={style.link}>Inicio</Link>
              <Link to="/songs" className={style.link}>Canciones</Link>
            </nav>
            <a 
              className={style.link} 
              href="https://github.com/FelixRodriguezG" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Link a GitHub
            </a>
        </aside>
      </div>
    </header>
  );
}