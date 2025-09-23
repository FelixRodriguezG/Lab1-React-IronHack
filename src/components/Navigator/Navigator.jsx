import style from "./Navigator.module.css";

export default function Navigator() {
  return (
    <nav>
      <ul className={style.list}>
          <li><a className={style.link} href="#dogs">Perros</a></li>
          <li><a className={style.link} href="#anime">Anime</a></li>
          <li><a className={style.link} href="#cinema">Cine</a></li>
          <li><a className={style.link} href="#programing">Programación</a></li>
        </ul>
    </nav>
  );
}
