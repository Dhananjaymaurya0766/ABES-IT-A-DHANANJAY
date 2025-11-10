import React from 'react'
import {Routes, Route, Link } from 'react-router-dom'
function Home(){
    return <h1>THIS IS MY HOMEPAGE</h1>
}
function About(){
    return <h1>THIS IS MY ABOUT PAGE</h1>
}

function Link11dom() {

  return (
    <div>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
      </Routes>
    </div>
  )
}

export default Link11dom
