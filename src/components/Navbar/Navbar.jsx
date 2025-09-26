import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, section = null) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
    if (section) {
      setTimeout(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.link} onClick={(e) => handleScroll(e)}>
        Home
      </Link>
      <Link
        to="/"
        className={styles.link}
        onClick={(e) => handleScroll(e, "hobbies")}
      >
        Aficiones
      </Link>
      <Link to="/songs" className={styles.link}>
        Mis Canciones
      </Link>
      <Link to="/crud" className={styles.link}>
        CRUD
      </Link>
      <Link to="/contact" className={styles.link}>
        Contactar
      </Link>
      <a
        className={styles.link}
        href="https://github.com/FelixRodriguezG"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ verticalAlign: "middle", marginRight: "8px" }}
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
    </nav>
  );
}
