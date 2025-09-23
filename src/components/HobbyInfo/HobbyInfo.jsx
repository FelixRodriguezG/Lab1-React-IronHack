import style from "./HobbyInfo.module.css";

export default function HobbyInfo({ hobby }) {
  return (
    <section id={hobby.id} className={style.container}>
      <article>
        <h2>{hobby.title}</h2>
        <p>{hobby.description}</p>
      </article>
      <div className={style.imgContainer}>
        <img className={style.img} src={hobby.img} alt={`Imagen de ${hobby.title}`} />
      </div>
    </section>
  );
}
