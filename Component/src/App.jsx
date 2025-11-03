import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Changestate from './Changestate'
import Count from './Count'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Count/>
    </>
        
  )
}

export default App
