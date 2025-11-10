import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Book'
import Navbaar from './Navbaar'
import Nav from './components/Nav'
import Link1Dom from './components/Link1dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <Nav/>
      <Book/>
      <br/>
      <Book/>
      <br/>
      <Book/>
      <br/>
      <BrowserRouter>
    <Link11dom/>
    </BrowserRouter>
    </div>
  )
}

export default App
