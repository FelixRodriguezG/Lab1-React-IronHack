import { useEffect, useState } from 'react';
import styles from "./SongList.module.css";

const SongList = () => {
    const [ songs, setSongs ] = useState([]);
    const [ state, setState ] = useState({ loading:true, error:null });

    console.log('songs:', songs);

    useEffect(()=>{
        const loadSongs = async () => {
            try{
                const res = await fetch("/songs.json", { cache: "no-store"});
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setSongs(Array.isArray(data) ? data.slice(0, 10) : []);
                setState({ loading:false, error:null }); 
            }catch(err){
                setState({ loading:false, error:err.message || "Error cargando datos JSON"})
            }
        };
        loadSongs();
    }, [])

    if (state.loading) return <p className={styles.status}>Cargando canciones…</p>;
    if (state.error) return <p className={styles.statusError}>Error: {state.error}</p>;
    if (!songs.length) return <p className={styles.status}>No hay canciones disponibles.</p>;


  return (
    
    <section className="container">
      <header className={styles.header}>
        <h2>Top 10 canciones de los años 80</h2>
        <span className={styles.count}>Total de canciones mostradas{songs.length}</span>
      </header>

      <ul className={styles.grid}>
        {songs.map((song) => (
          <li className={styles.card} key={song.id} >
            <figure className={styles.figure}>
              <img 
                className={styles.imageAlbum}
                src={song.imageAlbum} 
                alt={`Álbum ${song.album}`}
                loading="lazy"
                width="300"
                height="450"                
                onError={(err) => { err.currentTarget.src = "https://placehold.co/300x450?text=No+Image";}}
              />
            </figure>
          <figcaption className={styles.caption}>
            <h3 className={styles.title}>{song.title}</h3>
                <p className={styles.meta}>
                  <span className={styles.badge}>{song.album}</span>
                  <span className={styles.dot}>•</span>
                  <span>{song.duration} minutos</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.rating}>★ {song.rating}</span>
                </p>
          </figcaption>

          </li>
        ))}

      </ul>
    
    </section>
  )
}

export default SongList;