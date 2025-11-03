import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <Book/>
      <br/>
      <Book/>
      <br/>
      <Book/>
      <br/>
    </div>
  )
}

export default App
