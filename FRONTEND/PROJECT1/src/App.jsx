import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([])
  async function getserver(){
      //alert("hi...")
      const serverdata=await fetch('http://localhost:4002/data')
      const jsondata = await serverdata.json();
      setData(jsondata);
    }
  return (
    <>
    <h2>Fetching data using node server</h2>
    <button onClick={getserver}></button>
    {JSON.stringify(data)}
    </>
  )
}

export default App
