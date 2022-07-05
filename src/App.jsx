import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home />  // <Home /> is the same as <Home />
  )
}

export default App
