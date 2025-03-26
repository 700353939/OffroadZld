import { useState } from 'react'
import './App.css'
import WelcomeConteiner from './components/WelcomeConteiner'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="save-date">Save Date</div>
      <div className="weather">Weather</div>
      <WelcomeConteiner />
      <div className="gallery">Gallery</div>
      <div className="contact-us">Contact us</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    <Footer />
    </>
  )
}

export default App
