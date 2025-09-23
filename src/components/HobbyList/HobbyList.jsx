import { useEffect, useState } from "react";
import HobbyInfo from "../HobbyInfo/HobbyInfo";
import styles from "./HobbyList.module.css";


function HobbyList() {
  const [hobbies, setHobbies] = useState([]);
  const [state, setState] = useState({ loading: true, error: null });

  console.log("hobbies:", hobbies);

  useEffect(() => {
    const loadHobbies = async () => {
      try {
        const res = await fetch("/hobbies.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setHobbies(Array.isArray(data) ? data : []);
        setState({ loading: false, error: null });
      } catch (err) {
        setState({
          loading: false,
          error: err.message || "Error cargando datos JSON",
        });
      }
    };
    loadHobbies();
  }, []);

  if (state.loading)
    return <p className={styles.status}>Cargando aficiones...</p>;
  if (state.error)
    return <p className={styles.statusError}>Error: {state.error}</p>;
  if (!hobbies.length)
    return (
      <p className={styles.status}>
        No hay aficones que cargar buscate una vida.
      </p>
    );

  return (
    <section className="container">
      <h2>Mis aficiones</h2>
      <ul className={styles.grid}>
        {hobbies.map((hobby) => (
          <li className={styles.card} key={hobby.id}>
            <HobbyInfo hobby={hobby} />            
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HobbyList;
