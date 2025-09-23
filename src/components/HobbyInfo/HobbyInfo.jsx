import style from "./HobbyInfo.module.css";

export default function HobbyInfo({ hobby }) {
  return (
    <section id={hobby.id}>
      <h2>{hobby.title}</h2>
      <p>{hobby.description}</p>
      <img src={hobby.img} alt={`Imagen de ${hobby.title}`} />
    </section>
  );
}
