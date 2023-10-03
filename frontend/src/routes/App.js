import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='/review'>Add review</Link>
      </header>
    </div>
  )
}

export default App
