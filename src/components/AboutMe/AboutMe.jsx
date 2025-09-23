import React from "react";
import Navigator from "../Navigator/Navigator";
import style from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <header className={`container ${style.header} `}>
      <div className={style.imgContainer}>
        <img
          className={style.img}
          src="funko.png"
          alt="Imangen estilo funkoPop"
        />
        <aside className={style.nameContainer}>
            <h1>Felix</h1>
            <h2>Rodriguez Gonzalez</h2>
            <Navigator />
            <a className={style.link} href="https://github.com/FelixRodriguezG" target="_blank">Link a GitHub</a>
        </aside>
      </div>
    </header>
  );
}
