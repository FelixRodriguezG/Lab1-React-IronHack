import './Page.css'

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>This React application was created as part of Lab1 for IronHack.</p>
      <div className="about-content">
        <h2>What you'll learn:</h2>
        <ul>
          <li>Setting up a React project with Vite</li>
          <li>Implementing client-side routing with React Router DOM</li>
          <li>Creating reusable components</li>
          <li>Modern React development practices</li>
        </ul>
        
        <h2>Technologies Used:</h2>
        <div className="tech-stack">
          <span className="tech-item">React</span>
          <span className="tech-item">Vite</span>
          <span className="tech-item">React Router DOM</span>
          <span className="tech-item">CSS3</span>
        </div>
      </div>
    </div>
  )
}

export default About