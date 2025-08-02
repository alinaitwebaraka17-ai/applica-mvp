import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo-section">
        <h1 className="brand-title">Applica</h1>
        <p className="brand-tagline">Discover your purpose. Shape your future.</p>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Current pulse: {count}
        </button>
        <p className="interaction-note">
          This button confirms the system is interactive and live.
        </p>
      </div>

      <p className="read-the-docs">
        Applica is in early development. Real features will appear here soon.
      </p>
    </>
  )
}

export default App