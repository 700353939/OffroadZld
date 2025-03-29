import { Routes, Route } from 'react-router'
import { useState } from 'react'
import './App.css'
import WelcomeConteiner from './components/WelcomeConteiner'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<WelcomeConteiner />} />
    </Routes>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    <Footer />
    </>
  )
}

export default App
