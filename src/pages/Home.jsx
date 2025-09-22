import './Page.css'

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Lab1 React IronHack</h1>
      <p>This is the home page of our React application built with Vite and React Router DOM.</p>
      <div className="features">
        <h2>Features:</h2>
        <ul>
          <li>⚡ Vite for fast development</li>
          <li>⚛️ React 19 for modern UI</li>
          <li>🛣️ React Router DOM for navigation</li>
          <li>🎨 Responsive design</li>
        </ul>
      </div>
    </div>
  )
}

export default Home