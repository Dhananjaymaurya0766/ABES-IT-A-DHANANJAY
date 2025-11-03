import React from 'react'
import './Book.css'


function Book() {
  return (
    <div id='book'>
      <img src='https://m.media-amazon.com/images/I/610ECILwD+L._AC_UF894,1000_QL80_.jpg' alt='' height={300} width={250}/>
      <h1>Title:Maths</h1>
      <h1>250</h1>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default Book;
