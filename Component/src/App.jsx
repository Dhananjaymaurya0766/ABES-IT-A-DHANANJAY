import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Changestate from './Changestate'
import Count from './Count'
import {BrowserRouter} from 'react-router-dom'
import Link11dom from './Link11dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Link11dom/>
    </BrowserRouter>
        
  )
}

export default App
