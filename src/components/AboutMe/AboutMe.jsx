import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <>
      <h2>Sobre Mi</h2>
      <section id="aboutMe" className={styles.myInfo}>
        <p>
          Soy desarrollador web con formación en{" "}
          <strong>bootcamps de desarrollo web</strong> y{" "}
          <strong>ciberseguridad</strong>. La programación me apasiona porque me
          permite dar forma a ideas mezclando{" "}
          <strong>lógica y creatividad</strong>.
        </p>
        <p>
          He trabajado en proyectos que combinan <strong>front-end</strong> y{" "}
          <strong>back-end</strong>, utilizando tecnologías como
          <em>HTML, CSS, JavaScript, Vue.js, Tailwind y Node.js</em>. Cada
          experiencia me ha permitido mejorar mis habilidades técnicas y
          aprender a afrontar retos de forma práctica y eficiente.
        </p>
        <p>
          Como <strong>Teacher Assistant</strong> descubrí lo valioso que es
          compartir conocimientos, guiar a otros en su aprendizaje y resolver
          problemas en equipo. Esto reforzó en mí la importancia de la
          colaboración y el trabajo en comunidad dentro del mundo tecnológico.
        </p>
        <p>
          Me considero una persona{" "}
          <strong>curiosa, adaptable y en constante aprendizaje</strong>.
          Siempre busco aportar soluciones creativas y efectivas a los proyectos
          en los que participo, con el objetivo de crecer profesionalmente y
          contribuir a que las ideas se conviertan en realidades digitales.
        </p>
      </section>
    </>
  );
}
