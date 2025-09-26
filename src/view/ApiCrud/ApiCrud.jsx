import { useEffect, useMemo, useState } from "react";
import styles from './ApiCrud.module.css';

const API = "https://jsonplaceholder.typicode.com/posts";

// Helpers
const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);


// Mapea un "post" de JSONPlaceholder a nuestro "song"
function toSong(s) {
  const id = Number(s.id);
  const duration = Math.floor(Math.random() * (320 - 100 + 1)) + 100;
  const pseudoRating = Math.round((((id % 10) + 1)) * 10) / 20; // Genera un rating entre 1-5

  return {
    id,
    title: cap(s.title ?? "Untitled"),
    album: "Album " + id, // Generamos un nombre de álbum basado en el ID
    imageAlbum: "https://picsum.photos/200/200?random=" + id, // Imagen aleatoria
    duration,
    rating: pseudoRating
  };
}

export default function ApiSongCRUD() {
  // ---- Estado base ----
  const [ songs, setSongs ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  // ---- Filtros / orden (compatibles con tu estilo) ----
  const [ query, setQuery ] = useState("");
  const [ queryAlbum, setQueryAlbum ] = useState("");
  const [ sortBy, setSortBy ] = useState("rating"); // rating | duration | title | album
  const [ sortDir, setSortDir ] = useState("desc"); // asc | desc
  const [ minRating, setMinRating ] = useState(0);

  // ---- Formulario (Create/Update) ----
  const [ editingId, setEditingId ] = useState(null);
  const [ form, setForm ] = useState({
    title: '',
    album: '',
    imageAlbum: '',
    duration: '',
    rating: ''
  });

  // ---- Validaciones de los campos del Formulario ----
  const [ validationErrors, setValidationErrors ] = useState({
    title: '',
    album: '',
    duration: '',
    rating: ''
  });

  // ---- READ: carga inicial ----
  useEffect(() => {
    let canceled = false;
    (async () => {
      try {
        const res = await fetch(`${API}?_limit=12`, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (canceled) return;
        setSongs((Array.isArray(data) ? data : []).map(toSong));
        setError(null);
      } catch (e) {
        if (!canceled) setError(e.message || "Error cargando API");
      } finally {
        if (!canceled) setLoading(false);
      }
    })();
    return () => { canceled = true; };
  }, []);

  // ---- Derivados ----
  const filteredSorted = useMemo(() => {
    const s = songs
      .filter(s => {
        const searchTitle = query.trim().toLowerCase();
        const searchAlbum = queryAlbum.trim();

        // Si es un número, buscar en el id del álbum
        if (!isNaN(searchAlbum)) {
          return s.title.toLowerCase().includes(searchTitle) ||
            s.id === Number(searchAlbum);
        }

        // Si no es un número, buscar en título y álbum completo
        return s.title.toLowerCase().includes(searchTitle) ||
          s.album.toLowerCase().includes(searchAlbum.toLowerCase());
      })
      .filter(s => Number(s.rating ?? 0) >= Number(minRating));

    const sorted = [ ...s ].sort((a, b) => {
      let comp = 0;
      switch (sortBy) {
        case "rating":
          comp = Number(a.rating ?? 0) - Number(b.rating ?? 0);
          break;
        case "duration":
          comp = Number(a.duration ?? 0) - Number(b.duration ?? 0);
          break;
        case "title":
          comp = a.title.localeCompare(b.title);
          break;
        case "album":
          comp = a.id - b.id;  // Ordeno por id porque coincide con el numero del Albúm
          break;
        default:
          comp = 0;
      }
      return sortDir === "asc" ? comp : -comp;
    });

    return sorted;
  }, [ songs, query, queryAlbum, minRating, sortBy, sortDir ]);

  // ---- Handlers Form ----
  const startCreate = () => {
    setEditingId(null);
    setForm({ title: "", album: "", duration: "", rating: "" });
  };


  const startEdit = (s) => {
    setEditingId(s.id);
    setForm({
      title: s.title ?? "",
      album: s.album ?? "",
      duration: s.duration ?? "",
      rating: s.rating ?? ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'title':
        if (!value.trim()) {
          error = 'El título es requerido';
        } else if (value.length < 3) {
          error = 'El título debe tener al menos 3 caracteres';
        }
        break;
      case 'album':
        if (!value.trim()) {
          error = 'El álbum es requerido';
        }
        break;
      case 'duration':
        if (!value) {
          error = 'La duración es requerida';
        } else if (value < 0 || value > 600) {
          error = 'La duración debe estar entre 0 y 600 segundos';
        }
        break;
      case 'rating':
        if (!value) {
          error = 'La valoración es requerida';
        } else if (value < 1 || value > 5) {
          error = 'La valoración debe estar entre 1 y 5';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [ name ]: value }));

    const error = validateField(name, value);
    setValidationErrors(prev => ({
      ...prev,
      [ name ]: error
    }));
  };

  // ---- CREATE / UPDATE ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar todos los campos
    const errors = {};
    Object.keys(form).forEach(key => {
      const error = validateField(key, form[ key ]);
      if (error) errors[ key ] = error;
    });

    // Si hay errores, actualizar el estado y detener el envío
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }


    const payload = {
      title: form.title.trim(),
      album: form.album.trim(),
      duration: Number(form.duration) || undefined, // Corregido de year a duration
      rating: Number(form.rating) || undefined,
    };

    try {
      if (editingId == null) {
        // CREATE
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const created = await res.json(); // id simulado por la API
        const song = toSong({ ...payload, id: created.id ?? Date.now() });
        setSongs((prev) => [ song, ...prev ]); // añadimos arriba
      } else {
        // UPDATE
        const res = await fetch(`${API}/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const updated = await res.json();
        setSongs((prev) =>
          prev.map((s) => (s.id === editingId ? toSong({ ...s, ...updated }) : s))
        );
      }

      // reset form
      setEditingId(null);
      setForm({ title: "", album: "", duration: "", rating: "" });
      setError(null);
    } catch (err) {
      setError(err.message || "Error enviando datos");
    }
  }

  // ---- DELETE ----
  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que quieres borrar esta canción?")) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSongs((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      setError(err.message || "Error borrando");
    }
  };


  if (loading) return <p className={styles.status}>Cargando…</p>;
  if (error) return <p className={styles.error}>Error: {error}</p>;

  return (
    <section className={styles.wrapper}>
      <h2>CRUD de canciones con (Api pública)</h2>
      {/* ---- Formulario Create/Update ---- */}
      <form className={styles.controls} onSubmit={handleSubmit} noValidate>
        <input
          className={styles.input}
          name="title"
          type="text"
          placeholder="Título *"
          value={form.title}
          onChange={handleChange}
          required

        />
        <input
          className={styles.input}
          name="album"
          type="text"
          placeholder="Album"
          value={form.album}
          onChange={handleChange}
          minLength={2}
          maxLength={100}

        />
        <input
          className={styles.number}
          name="duration"
          type="number"
          placeholder="Duración (seg)"
          value={form.duration}
          onChange={handleChange}
          min="0"
          max="600"
        />
        <input
          className={styles.number}
          name="rating"
          type="number"
          placeholder="Rating 0–5"
          value={form.rating}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
        />
        <button
          type="submit"
          style={{ padding: ".55rem .9rem", borderRadius: ".55rem", border: "1px solid #cbd5e1" }}
        >
          {editingId == null ? "Crear" : "Guardar cambios"}
        </button>
        {editingId != null && (
          <button
            type="button"
            onClick={startCreate}
            style={{ padding: ".55rem .9rem", borderRadius: ".55rem", border: "1px solid #cbd5e1", background: "#f8fafc" }}
          >
            Cancelar
          </button>
        )}
      </form>

      {/* ---- Filtros simples ---- */}
      <div className={styles.controls}>
        <input
          className={styles.input}
          placeholder="Buscar por título…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="Buscar por album…"
          value={queryAlbum}
          onChange={(e) => setQueryAlbum(e.target.value)}
        />
        <label className={styles.row}>
          Min ★
          <input
            className={styles.number}
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          />
        </label>
        <label className={styles.row}>
          Ordenar por
          <select
            className={styles.select}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">title</option>
            <option value="album">album</option>
            <option value="duration">duration</option>
            <option value="rating">rating</option>
          </select>
        </label>
        <label className={styles.row}>
          Dirección
          <select
            className={styles.select}
            value={sortDir}
            onChange={(e) => setSortDir(e.target.value)}
          >
            <option value="desc">desc</option>
            <option value="asc">asc</option>
          </select>
        </label>
      </div>

      {/* ---- Grid de tarjetas ---- */}
      <ul className={styles.grid}>
        {filteredSorted.map((s) => (
          <li key={s.id} className={styles.card}>
            <img
              className={styles.poster}
              src={s.imageAlbum || "https://placehold.co/300x450?text=No+Image"}
              alt={`Póster de ${s.title}`}
              loading="lazy"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/300x450?text=No+Image"; }}
            />
            <div className={styles.body}>
              <h3 className={styles.title}>{s.title}</h3>
              <h3 className={styles.album}>{s.album}</h3>
              <p className={styles.meta}>
                {(s.duration ?? "N/A")} • ★ {s.rating ?? "N/A"}
              </p>

              <div style={{ display: "flex", gap: ".5rem", marginTop: ".5rem" }}>
                <button
                  type="button"
                  onClick={() => startEdit(s)}
                  style={{ padding: ".35rem .7rem", borderRadius: ".5rem", border: "1px solid #cbd5e1" }}
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(s.id)}
                  style={{ padding: ".35rem .7rem", borderRadius: ".5rem", border: "1px solid #cbd5e1", background: "#fee2e2" }}
                >
                  Borrar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>



    </section>
  )
}
